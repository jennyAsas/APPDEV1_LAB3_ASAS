import { Component } from '@angular/core';
import { TaskService } from '../../services/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-filter.html',
  styleUrls: ['./task-filter.css'],
})
export class TaskFilterComponent {
  constructor(private taskService: TaskService) {}

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.taskService.setFilter(filter);
  }
}
