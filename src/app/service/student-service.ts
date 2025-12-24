import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    { name: 'Prachi', phone: 9313308187, email: 'prachipatel@gmail.com', address: 'Valsad', gender: 'female' },
    { name: 'Pal', phone: 9724067226, email: 'pal@gmail.com', address: 'Vapi', gender: 'female' }
  ];
  getStudents() {
    return this.students;
  }
}
