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
  ]
};

Students.findAll = function() {
  return this.students;
};

Students.create = function(student) {
  student.id = ++this.idIncrementor;
  this.students.push(student);
  return this.students;
};

Students.destroy = function(id) {
  if (this.students.find(student => student.id === +id)) {
    return this.students.filter(student => student.id !== +id);
  }
  return undefined;
};

Students.findById = function(id) {
  return this.students.find(student => student.id === +id);
};

Students.update = function(studentUpdate, id) {
  if (this.students.find(student => student.id === +id)) {
    this.students[+id - 1] = Object.assign(
      {},
      this.students[+id - 1],
      studentUpdate
    );
    return this.students;
  }
  return undefined;
};

module.exports = Students;
