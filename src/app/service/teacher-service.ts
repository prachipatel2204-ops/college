import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  [x: string]: any;

  showForm = false;

  teachers = [
    { name: 'Pinkal', phone: 9724067226, email: 'pinkal@gmail.com', address: 'valsad', gender: 'female' },
    { name: 'Vinesh', phone: 9879684933, email: 'vinesh@gmail.com', address: 'vapi', gender: 'male' }
  ];

  data = { name:'', phone:'', email:'', address:'', gender:'' };

  addTeacher() {
    this.data = { name:'', phone:'', email:'', address:'', gender:'' };
    this.showForm = true;
  }
  saveTeacher(teacherValue: any) {
  this.teachers.push({ ...teacherValue }); 
  this.showForm = false;
}
  getTeachers() {
    return this.teachers;
  }
}
