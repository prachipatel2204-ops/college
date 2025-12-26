import { Injectable } from '@angular/core';
import { Gender, person } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  showForm = false;

 students:person[] = [
    { name: 'Prachi', phone: 9724067226, email: 'prachi@gmail.com', address: 'valsad', gender: Gender.Male },
    { name: 'Ishwar', phone: 9879684933, email: 'ishwar@gmail.com', address: 'vapi', gender: Gender.Female }
  ];

  data = { name: '', phone: 0, email: '', address: '', gender: '' };

  editIndex: number | null = null;

  addStudent() {
    this.data = { name: '', phone: 0, email: '', address: '', gender: '' };
    this.editIndex = null;
    this.showForm = true;
  }

  saveStudent(studentValue: person) {
    if (this.editIndex !== null) {
      // update existing student
      this.students[this.editIndex] = { ...studentValue };
    } else {
      // add new student
      this.students.push({ ...studentValue });
    }
    this.showForm = false;
    this.editIndex = null;
    this.data = { name: '', phone: 0, email: '', address: '', gender: '' };
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  editStudent(index: number) {
    this.editIndex = index;
    this.data = { ...this.students[index] };
    this.showForm = true;
  }

  getStudents() {
    return this.students;
  }
  getStudentsCount(){
    return(this.students.length);
  }
  getStudentByEmail(email: string) {
    return this.students.find(teacher => teacher.email === email);
  }
}
