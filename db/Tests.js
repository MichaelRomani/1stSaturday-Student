const Test = {
  idIncrementer: 5,
  tests: [
    {
      id: 1,
      subject: 'Pole-Vaulting',
      grade: 80,
      show: true
    },

    {
      id: 2,
      subject: 'Wind-Surfing',
      grade: 30,
      show: true
    },
    {
      id: 3,
      subject: 'Algorithms',
      grade: 94,
      show: true
    },

    {
      id: 4,
      subject: 'Whittling',
      grade: 59,
      show: true
    },

    {
      id: 5,
      subject: 'Sociology',
      grade: 71,
      show: true
    }
  ],
  findAll: function() {
    return this.tests();
  },
  passing: function() {
    return this.tests.filter(test => test.grade > 70);
  },
  findById: function(id) {
    return this.tests.find(test => test.id === +id);
  },
  findBySubject: function(subject) {
    return this.tests.find(test => test.subject === subject);
  },
  create: function(test) {
    test.id = ++this.idIncrementer;
    test.show = true;
    this.tests.push(test);
    return this.tests;
  },
  destroy: function(id) {
    if (this.tests.find(test => test.id === +id)) {
      return this.tests.filter(test => test.id !== +id);
    }
  }
};
module.exports = Test;
