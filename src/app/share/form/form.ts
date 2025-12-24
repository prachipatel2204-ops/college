import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  @Input() data={
    name:'',
    mno:'',
    email:'',
    address:'',
    gender:'',
  }
  @Input() editIndex:number|null = null;
  @Output() save = new EventEmitter<any>();

  // constructor(public s:StudService, public t:TeacherService){}
  submit(){
    this.save.emit(this.data);
    console.log(this.data);
}
}
