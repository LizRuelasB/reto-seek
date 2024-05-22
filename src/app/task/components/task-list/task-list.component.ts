import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { Store } from '@ngrx/store';
import { MatTableDataSource } from "@angular/material/table"
import { MatPaginator } from "@angular/material/paginator"
import { MatSort } from "@angular/material/sort"
import { Tasks } from '../../../core/models/task.model';
import { getTasklist } from '../../store/task.selector';

import { deletetask, gettask, loadtask, openpopup } from '../../store/task.actions';
import { TaskModalComponent } from '../task-modal/task-modal.component';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

  Tasklist!: Tasks[];
  datasource: any;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColums: string[] = ["id", "title", "description", "status", "action"]
  constructor(private dialog: MatDialog, private store: Store) {

  }
  ngOnInit(): void {
    this.store.dispatch(loadtask());
    this.store.select(getTasklist).subscribe(item => {
      this.Tasklist = item;
      console.log(this.Tasklist)
      this.datasource = new MatTableDataSource<Tasks>(this.Tasklist);
      // this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }

  createTask() {
    this.openPopup(0, 'Crear Tarea');
  }

  taskEdit(code:number){
    this.openPopup(code, 'Editar Tarea');
    this.store.dispatch(gettask({id:code}))
  }

  taskDelete(code:number){
    if(confirm('¿Estas seguro de eliminar?')){
      this.store.dispatch(deletetask({code:code}));
    }
  }

  openPopup(code: number, title: string) {
    this.store.dispatch(openpopup());
    this.dialog.open(TaskModalComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title
      }
    })

  }

}