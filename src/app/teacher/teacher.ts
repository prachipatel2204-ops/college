import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TeacherService } from '../service/teacher-service';
import { Table } from '../share/table/table';
import { Form } from '../share/form/form';
import { person } from '../interface/interface';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [FormsModule, Table, Form],
  templateUrl: './teacher.html',
  styleUrls: ['./teacher.css'],
})
export class Teacher implements OnInit {

  teachers: person[] = [];
  private router = inject(Router);

  constructor(public teacherService: TeacherService) {}

  ngOnInit(): void {
    this.teachers = this.teacherService.getTeachers();
  }

  saveTeacher(data: person) {
    this.teacherService.saveTeacher(data);
  }

  editData(index: number) {
    this.teacherService.editTeacher(index);
  }

  viewTeacher(email: string) {
    this.router.navigate(['teacher', email]); // ⭐ similar to Student's viewStudent
  }

  goToHome() {
    this.router.navigate(['dashboard']);
  }
}
