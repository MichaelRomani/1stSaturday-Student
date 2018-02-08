const Students = {
  idIncrementor: 3,
  students: [
    {
      id: 1,
      firstName: 'Ada',
      lastName: 'Lovelace'
    },
    {
      id: 2,
      firstName: 'Grace',
      lastName: 'Hopper'
    },
    {
      id: 3,
      firstName: 'Jean',
      lastName: 'Bartik'
    }
  ],
  findAll: function () {
    return this.students;
  },
  create: function (student) {
    student.id = ++this.idIncrementor;
    this.students.push(student);
  },
  destroy: function (id) {
    this.students = this.students.filter(student => student.id !== +id);
  },
  findById: function (id) {
    return this.students.find(student => student.id === +id);
  },
  update: function (studentUpdate, id) {
    this.students[+id - 1] = Object.assign({}, this.students[+id - 1], studentUpdate);
  }
};

module.exports = Students;
