import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  public newTask: any;
  public items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // Takes the value entered in the textbox adds to the items array
  onSubmit() {
    if (this.newTask == '') {
    }
    else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  /* This function takes to input the task, that has to be deleted*/
  public deleteTask(index: any) {
    this.items.splice(index, 1);
  }
}
