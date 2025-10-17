import { Component } from '@angular/core';
import { TaskService } from '../../services/task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css'],
})
export class TaskFormComponent {
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }
}
