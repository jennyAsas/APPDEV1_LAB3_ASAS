import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;
  private currentFilter: 'all' | 'active' | 'completed' = 'all';
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  filteredTasks$ = this.tasksSubject.asObservable();

  constructor() {
    this.updateFilteredTasks();
  }

  private generateId(): number {
    return this.nextId++;
  }

  addTask(description: string): void {
    const newTask: Task = {
      id: this.generateId(),
      description,
      isCompleted: false,
      createdAt: new Date(),
    };
    this.tasks.push(newTask);
    this.updateFilteredTasks();
  }

  editTask(id: number, newDescription: string): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.description = newDescription;
      this.updateFilteredTasks();
    }
  }

  updateTaskCompletion(id: number, isCompleted: boolean): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.isCompleted = isCompleted;
      this.updateFilteredTasks();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.updateFilteredTasks();
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.currentFilter = filter;
    this.updateFilteredTasks();
  }

  private updateFilteredTasks(): void {
    let filtered: Task[];
    switch (this.currentFilter) {
      case 'active':
        filtered = this.tasks.filter((t) => !t.isCompleted);
        break;
      case 'completed':
        filtered = this.tasks.filter((t) => t.isCompleted);
        break;
      default:
        filtered = [...this.tasks];
    }
    this.tasksSubject.next(filtered);
  }

  getAllTasks(): Task[] {
    return [...this.tasks];
  }
}
