import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TeacherService } from '../service/teacher-service';
import { Form } from '../share/form/form';
import { Table } from '../share/table/table';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [RouterModule, FormsModule, Table, Form],
  templateUrl: './teacher.html',
  styleUrls: ['./teacher.css'],
})
export class Teacher implements OnInit {
  private router = inject(Router);
  teachers: any[] = [];

  constructor(public teacherService: TeacherService) { }


  ngOnInit() {
    this.teachers = this.teacherService.getTeachers();
  }
  savestudent(teacherValue: any) {
    this.teacherService.saveTeacher(teacherValue);
  }

  editdata(index: number) {
    this.teacherService.editTeacher(index);
  }
  goToHome() {
    this.router.navigate(['/dashboard']);
  }
}
