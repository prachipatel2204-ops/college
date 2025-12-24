import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  teachers=[
    { name: 'Pinkal',phone:9724067226,email:'pinkal@gmail.com',address:'valsad',gender:'female'},
    {name:'Vinesh',phone:9879684933,email:'vinesh@gmail.com',address:'vapi',gender:'male'}
  ]
  getTeachers() {
    return this.teachers;
  }
}
