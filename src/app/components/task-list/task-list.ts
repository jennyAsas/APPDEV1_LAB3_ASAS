import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  editingTaskId: number | null = null;
  editedDescription: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.filteredTasks$.subscribe((tasks) => (this.tasks = tasks));
  }

  toggleTaskCompletion(task: Task): void {
    this.taskService.updateTaskCompletion(task.id, !task.isCompleted);
  }

  startEditing(task: Task): void {
    this.editingTaskId = task.id;
    this.editedDescription = task.description;
  }

  saveEditing(task: Task): void {
    if (this.editedDescription.trim()) {
      this.taskService.editTask(task.id, this.editedDescription.trim());
      this.editingTaskId = null;
    }
  }

  cancelEditing(): void {
    this.editingTaskId = null;
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}
