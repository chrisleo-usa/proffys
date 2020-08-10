module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {

  //inserir dados na table de proffys
  //Precisamos que o arquivo seja criado, mas ele demora um pouquinho, é necessário dizer para o JS esperar a ciração do arquivo para então prosseguir para a próxima linha, por isso colocamos o .then(). O problema com o then é que o código vai ficando muito grande, pois adicionamos uma função dentro de outra diversas vezes, para isso podemos colocar um await na frente do db.run() e então tiramos o then, desta maneira o JS irá aguardar terminar aquela linha para então continuar para a próxima. Além disso é necessário que adicione a palavra async na frente da function em que o await está dentro, se não ele não irá funcionar. 
  const insertedProffy = await db.run(`
    INSERT INTO proffys (
      name,
      avatar,
      whatsapp,
      bio
    ) VALUES (
      "${proffyValue.name}",
      "${proffyValue.avatar}",
      "${proffyValue.whatsapp}",
      "${proffyValue.bio}"
    );
  `)

  const proffy_id = insertedProffy.lastID

  //inserir dados na tabela classes

  const insertedClasses = await db.run(`
    INSERT INTO classes (
      subject,
      cost,
      proffy_id
    ) VALUES (
      "${classValue.subject}",
      "${classValue.cost}",
      "${proffy_id}"
    );
  `)

  const class_id = insertedClasses.lastID

  //inserir dados na Tabela classes_schedule
  //Será necessário realizar um loop aqui, pois um professor pode escolher mais de uma data para dar aula. o map é utilizado para loop e o bom dele é que ele retorna os dados em forma de um array. Não esquecer que é necessário sempre ter um return quando for map. 
  const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
    return db.run(`
      INSERT INTO class_schedule (
        class_id,
        weekday,
        time_from,
        time_to
      ) VALUES (
        "${class_id}",
        "${classScheduleValue.weekday}",
        "${classScheduleValue.time_from}",
        "${classScheduleValue.time_to}"
      );
    `)
  })

  //aqui executaremos todos os db.runs() das class_schedules
  //Como podemos ter mais de um class_schedules por professor, pedimos para aguardar (await) a execução de todos os db.runs(), então .all como uma promessa(promise). A propriedade all da promise, consegue executar várias promises. 
  await Promise.all(insertedAllClassScheduleValues)

}