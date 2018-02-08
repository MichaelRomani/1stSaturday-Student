let number = 3;

let Students = {
  students: [
    {
      id: 1,
      firsName: 'Ada',
      lastName: 'Lovelace',
      enrolled: true
    },
    {
      id: 2,
      firsName: 'Grace',
      lastName: 'Hopper',
      enrolled: true
    },
    {
      id: 3,
      firsName: 'Jean',
      lastName: 'Bartik',
      enrolled: true
    }
  ],
  findAll: function () {
    return this.students;
  },
  create: function (student) {
    student.id = ++number;
    this.students.push(student);
  },
  destroy: function (id) {
    this.students = this.students.filter(student => student.id !== +id);
  },
  findById: function (id) {
    return this.students.filter(student => student.id === +id)
  }
};

module.exports = Students;
