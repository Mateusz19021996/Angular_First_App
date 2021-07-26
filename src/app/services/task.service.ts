import { Injectable } from '@angular/core';
import { TASKS } from '../components/mock-tasks';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

getTasks(): Observable<Task[]>{
  
  return of(TASKS);
}

}
