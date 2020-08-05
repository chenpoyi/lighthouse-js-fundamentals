const ageCalculator = function(name, yearOfBirth, currentYear){
  const age = currentYear - yearOfBirth;
  return name + ' is ' + age + ' years old.';
}

//console.log(ageCalculator('Suzie', 2000, 2020));