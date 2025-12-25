import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../service/teacher-service';

@Component({
  selector: 'app-teacher-detail',
  imports: [],
  templateUrl: './teacher-detail.html',
  styleUrl: './teacher-detail.css',
})
export class TeacherDetail {
  email!:string;
  private route=inject(ActivatedRoute);
  private teacherService = inject(TeacherService);

  ngOnInit():void{
    this.email=this.route.snapshot.paramMap.get('email') || '';
    console.log(this.route);
  }
  get teachersDetails() {
    return this.teacherService.getTeacherByEmail(this.email);
  }

}
