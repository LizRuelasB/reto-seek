import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { Store } from '@ngrx/store';
import { getTask } from '../../store/task.selector';
import { TaskListComponent } from '../task-list/task-list.component';
import { Tasks } from '../../../core/models/task.model';
import { addtask, updatetask } from '../../store/task.actions';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.scss'
})
export class TaskModalComponent implements OnInit {

  title = 'Crear Tarea'
  isedit = false;
  dialogdata: any;

  constructor(private builder: FormBuilder, private ref: MatDialogRef<TaskListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private store: Store) {

  }
  ngOnInit(): void {
    this.dialogdata = this.data;
    this.title = this.dialogdata.title;
    this.store.select(getTask).subscribe(res => {
      console.log(res)
      this.taskform.setValue({
        id: res.id, 
        title: res.title, 
        description: res.description, 
        status: res.status
      })
    })
  }

  closePopup() {
    this.ref.close();
  }

  taskform = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
    status: this.builder.control(true)
  })

  saveModal() {
    if (this.taskform.valid) {
      const _obj: Tasks = {
        id: this.taskform.value.id as number,
        title: this.taskform.value.title as string,
        description: this.taskform.value.description as string,
        status: this.taskform.value.status as boolean,
      }

      console.log(_obj)

      if (_obj.id === 0) {
        this.store.dispatch(addtask({ inputdata: _obj }))
      } else {
        this.store.dispatch(updatetask({ inputdata: _obj }))
      }
      this.closePopup();
    }
  }

}
