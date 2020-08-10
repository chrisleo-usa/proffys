const Database = require('sqlite-async');


//Ao utilizar o then e colocar o atalho da função execute, ele estará colocando como parâmetro algum dado, para saber o que é vamos chamá-lo de db e podemos utilizar o console.log(db) para saber o que é este parâmetro. 

function execute(db) {
  //Como db é um objeto, vamos acessar a propriedade exec dele(aqui dentro vem códigos sql)
  //Vamos criar as tabelas do banco de dados.
  return db.exec(`
    CREATE TABLE IF NOT EXISTS proffys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      whatsapp TEXT,
      bio TEXT
    );

    CREATE TABLE IF NOT EXISTS classes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject INTEGER,
      cost TEXT,
      proffy_id INTEGER
    );

    CREATE TABLE IF NOT EXISTS class_schedule (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      class_id INTEGER,
      weekday INTEGER,
      time_from INTEGER,
      time_to INTEGER
    );
  `)
  

}

//Database abra o arquivo (path). depois que abrir(.then()), executar a função execute.
module.exports = Database.open(__dirname + '/database.sqlite').then(execute);
