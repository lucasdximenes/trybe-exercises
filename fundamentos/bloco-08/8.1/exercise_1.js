const newPerson = (completeName) => {
  const regex = /\s/g;
  const person = {
    name: completeName,
    email: `${completeName.toLowerCase().replace(regex, "_")}@trybe.com`,
  };
  return person;
};

const newEmployees = (generateEmployee) => {
  const employees = {
    id1: generateEmployee("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateEmployee("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateEmployee("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};
console.log(newEmployees(newPerson));
