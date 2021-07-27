import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task1: Task
@Output() onDeleteTaskEmit: EventEmitter<Task> = new EventEmitter()
faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.onDeleteTaskEmit.emit(task);
  }

}
