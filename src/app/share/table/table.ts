import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.css'],
})
export class Table {
  @Input() data: any[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

}
