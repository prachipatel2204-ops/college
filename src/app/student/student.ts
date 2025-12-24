import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StudentService } from '../service/student-service';
import { Table } from '../share/table/table';
import { Form } from '../share/form/form';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterModule,Table,Form],
  templateUrl: './student.html',
  styleUrls: ['./student.css'],
})
export class Student {
  private router = inject(Router);

    students: any[] = [];
  
    constructor(public studentService: StudentService ) {}
    
  
    ngOnInit() {
      this.students = this.studentService.getStudents();
    }
  goToHome() {
    this.router.navigate(['/dashboard']);
  }
}