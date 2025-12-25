import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentService } from '../service/student-service';
import { TeacherService } from '../service/teacher-service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  totalstudents!: number;
  totalteachers!: number;

  constructor(
    public studentService: StudentService,
    public teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.totalstudents = this.studentService.getStudentsCount();
    this.totalteachers = this.teacherService.getTeachersCount();
  }
}
