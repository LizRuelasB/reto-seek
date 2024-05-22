import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [],
  imports: [
    TaskRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: []
})
export class TaskModule {}
