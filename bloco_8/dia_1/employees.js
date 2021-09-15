const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva')
  }
  return employees;
};

const employeess = (param) => {
  const nomeEmail = `{ ${param}, ${param.split(' ').join('_')}@trybe.com }`
  return nomeEmail
}

console.log(newEmployees(employeess))