import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'todo', component: ToDoComponent },
  { path: 'countdown' , component: CountdownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
