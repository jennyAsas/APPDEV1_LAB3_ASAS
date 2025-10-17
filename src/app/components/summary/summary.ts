import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.html',
  styleUrls: ['./summary.css'],
})
export class SummaryComponent implements OnInit {
  total = 0;
  completed = 0;
  active = 0;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.filteredTasks$.subscribe(() => {
      const allTasks = this.taskService.getAllTasks();
      this.total = allTasks.length;
      this.completed = allTasks.filter((t) => t.isCompleted).length;
      this.active = allTasks.filter((t) => !t.isCompleted).length;
    });
  }
}
