import { Component } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form';
import { TaskListComponent } from './components/task-list/task-list';
import { TaskFilterComponent } from './components/task-filter/task-filter';
import { SummaryComponent } from './components/summary/summary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent, TaskFilterComponent, SummaryComponent],
  template: `
    <div class="container">
      <h1>Task Manager</h1>
      <app-summary></app-summary>
      <app-task-form></app-task-form>
      <app-task-filter></app-task-filter>
      <app-task-list></app-task-list>
    </div>
  `,
  styles: [
    `
      

      .container {
        max-width: 520px;
        margin: 40px auto;
        background: #fff8f0;
        padding: 20px;
        border-radius: 12px;
        color: #d2b48c;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
      h1 {
        text-align: center;
        color: #4e342e;
      }
    `,
  ],
})
export class AppComponent {}
