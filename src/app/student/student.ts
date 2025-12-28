import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StudentService } from '../service/student-service';
import { Table } from '../share/table/table';
import { Form } from '../share/form/form';
import { person } from '../interface/interface';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, Table, Form],
  templateUrl: './student.html',
  styleUrls: ['./student.css'],
})
export class Student implements OnInit {

  students: person[] = [];
  private router = inject(Router);

  constructor(public studService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studService.getStudents();
  }

  savestudent(data: person) {
    this.studService.saveStudent(data);
  }

  editdata(index: number) {
    this.studService.editStudent(index);
  }

  viewStudent(email: string) {
    this.router.navigate(['student', email]); // ⭐ IMPORTANT FIX
  }

  gotohome() {
    this.router.navigate(['dashboard']);
  }
}
