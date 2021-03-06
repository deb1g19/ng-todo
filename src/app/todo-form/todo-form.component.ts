import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todoForm = this.formBuilder.group({
    text: '',
  });

  constructor(
    private taskDataService: TaskDataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onAdd(): void {
    console.log('Running', this.todoForm.value);
    if (this.todoForm.value.text) {
      this.taskDataService.addTask(this.todoForm.value.text);
      this.todoForm.reset();
    }
  }
}
