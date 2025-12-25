import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class Form {

  @Input() data = {
    name: '',
    phone: 0,
    email: '',
    address: '',
    gender: '',
  };

  @Input() editIndex: number | null = null;
  @Output() save = new EventEmitter<any>();

  //constructor(public t: TeacherService) {}

  submit() {
    this.save.emit(this.data);
    console.log(this.data);
  }
}
