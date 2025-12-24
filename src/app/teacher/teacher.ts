import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TeacherService } from '../service/teacher-service';
import { Table } from '../share/table/table';
import { Form } from '../share/form/form';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [RouterModule, FormsModule,Table,Form],
  templateUrl: './teacher.html',
  styleUrls: ['./teacher.css'],
})
export class Teacher implements OnInit {
  private router = inject(Router);
  teachers: any[] = [];

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.teachers = this.teacherService.getTeachers();
  }

  goToHome() {
    this.router.navigate(['/dashboard']);
  }
}
