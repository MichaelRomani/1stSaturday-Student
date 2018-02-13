const Test = {
  idIncrementer: 5,
  tests: [
    {
      id: 1,
      subject: 'Pole-Vaulting',
      grade: 80
    },
    {
      id: 2,
      subject: 'Wind-Surfing',
      grade: 30
    },
    {
      id: 3,
      subject: 'Algorithms',
      grade: 94
    },

    {
      id: 4,
      subject: 'Whittling',
      grade: 59
    },

    {
      id: 5,
      subject: 'Sociology',
      grade: 71
    }
  ]
};

Test.findAll = function() {
  return this.tests;
};

Test.passing = function() {
  return this.tests.filter(test => test.grade > 70);
};

Test.findById = function(id) {
  return this.tests.find(test => test.id === +id);
};

Test.findBySubject = function(subject) {
  return this.tests.find(test => test.subject === subject);
};

Test.create = function(test) {
  test.id = ++this.idIncrementer;
  test.show = true;
  this.tests.push(test);
  return this.tests;
};

Test.destroy = function(id) {
  if (this.tests.find(test => test.id === +id)) {
    return this.tests.filter(test => test.id !== +id);
  }
};

module.exports = Test;
