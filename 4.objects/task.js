"use strict";

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.setSubject();
  this.addMark();
  this.getAverage();
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  } else this.marks.push(mark);
}

Student.prototype.addMarks = function(...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  } else this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
  if (!(this.marks === undefined)) {
    this.average = this.marks.reduce( (accum, item) => accum + item, 0) / (this.marks.length);
    // this.average = +(this.marks.reduce( (accum, item) => accum + item, 0) / (this.marks.length)).toFixed(2);
  }
  return this.average;
}

Student.prototype.exclude = function(reason) {
delete this.subjectName;
delete this.marks;
this.excluded = reason;
}