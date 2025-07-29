function findAge(person) {
  let yearOfDeath = person.yearOfDeath;
  let yearOfBirth = person.yearOfBirth;
  if (person.yearOfDeath === undefined) {
    yearOfDeath = new Date().getFullYear();
  }
  return yearOfDeath - yearOfBirth;
}

const findTheOldest = function (people) {
  let agedPeople = people.sort((personA, personB) => {
    return findAge(personB) - findAge(personA);
  });

  return agedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
