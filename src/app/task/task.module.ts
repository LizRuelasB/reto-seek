// src/app/task/task.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Importar componentes
import { TaskListComponent } from './components/task-list/task-list.component';
// import { TaskCreateComponent } from './components/task-create/task-create.component';
// import { TaskEditComponent } from './components/task-edit/task-edit.component';
// import { TaskDetailComponent } from './components/task-detail/task-detail.component';

// // Importar NgRx
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { taskReducer } from './state/reducers/task.reducer';
// import { TaskEffects } from './state/effects/task.effects';
// import { TaskStateModule } from './state/task-state.module';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TaskRoutingModule } from './task-routing.module';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { TaskReducer } from './store/task.reducer';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    // TaskListComponent,
    // TaskCreateComponent,
    // TaskEditComponent,
    // TaskDetailComponent
  ],
  imports: [
    TaskRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    
  ],
  exports: [
    
  ]
})
export class TaskModule {}
