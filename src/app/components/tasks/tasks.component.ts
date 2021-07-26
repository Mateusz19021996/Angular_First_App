import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../mock-tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = [];

  constructor(private taskService: TaskService) { }

  // this function fires off right away - odpala sie odrazu
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks)); // ?????
  }

}
