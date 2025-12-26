import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TeacherService } from '../service/teacher-service';
import { Form } from '../share/form/form';
import { Table } from '../share/table/table';
import { person } from '../interface/interface';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [RouterModule, FormsModule, Table, Form],
  templateUrl: './teacher.html',
  styleUrls: ['./teacher.css'],
})
export class Teacher implements OnInit {
  private router = inject(Router);
  teachers: person[] = [];

  constructor(public teacherService: TeacherService) { }


  ngOnInit() {
    this.teachers = this.teacherService.getTeachers();
  }
  savestudent(teacherValue: person) {
    this.teacherService.saveTeacher(teacherValue);
  }

  editdata(index: number) {
    this.teacherService.editTeacher(index);
  }
  goToHome() {
    this.router.navigate(['/dashboard']);
  }
}
