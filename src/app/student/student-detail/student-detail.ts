import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../service/student-service';

@Component({
  selector: 'app-student-detail',
  imports: [],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css',
})
export class StudentDetail implements OnInit {
  email!:string;
  private route=inject(ActivatedRoute);
  private studentService = inject(StudentService);
  ngOnInit():void{
    this.email=this.route.snapshot.paramMap.get('email') || '';
    console.log(this.route);
  }
  get studentsDetails() {
    return this.studentService.getStudentByEmail(this.email);
  }
}
