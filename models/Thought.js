const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: 
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', studentSchema);

module.exports = Student;
