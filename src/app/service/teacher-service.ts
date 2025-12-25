import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {

  showForm = false;

  teachers = [
    { name: 'Pinkal', phone: 9724067226, email: 'pinkal@gmail.com', address: 'valsad', gender: 'female' },
    { name: 'Vinesh', phone: 9879684933, email: 'vinesh@gmail.com', address: 'vapi', gender: 'male' }
  ];

  data = { name:'', phone:0, email:'', address:'', gender:'' };

  editIndex: number | null = null;

  addTeacher() {
    this.data = { name:'', phone:0, email:'', address:'', gender:'' };
    this.editIndex = null;
    this.showForm = true;
  }

  saveTeacher(teacherValue: any) {
    if (this.editIndex !== null) {
      this.teachers[this.editIndex] = { ...teacherValue };
    } else {
      this.teachers.push({ ...teacherValue });
    }

    this.editIndex = null;
    this.data = { name:'', phone:0, email:'', address:'', gender:'' };
  }

  deleteTeacher(index: number) {
    this.teachers.splice(index, 1);
  }

  editTeacher(index: number) {
    this.editIndex = index;
    this.data = { ...this.teachers[index] };
    this.showForm = true;
  }

  getTeachers() {
    return this.teachers;
  }
  getTeachersCount(){
    return(this.teachers.length);
  }
  getTeacherByEmail(email: string) {
    return this.teachers.find(teacher => teacher.email === email);
  }
}
