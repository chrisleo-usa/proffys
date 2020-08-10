const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]

//Função para pegar a posição da aula e retornar o nome da aula, ao invés do número da posição. 
function getSubject(subjectNumber) {
  const arrayPosition = +subjectNumber - 1
  return subjects[arrayPosition]
}

function convertHoursToMinutes(time) {
  //usando dessa forma, deixamos o código mais limpo
  const [ hour, minutes ] =time.split(":")
  //ao invés de:
  //const hour = time.split(":")[0]
  //const minutes = time.split(":")[1]

  return Number((hour * 60) + minutes)

}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}