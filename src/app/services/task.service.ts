import { Injectable } from '@angular/core';
//import { TASKS } from '../components/mock-tasks';
import { Task } from '../Task';
//import { Observable, of } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private myHttp: HttpClient) { }

getTasks(): Observable<Task[]>{
  
  return this.myHttp.get<Task[]>(this.apiUrl)
}

deleteTask(task: Task){
  const url = `${this.apiUrl}/${task.id}`
  return this.myHttp.delete<Task>(url);
}

}
