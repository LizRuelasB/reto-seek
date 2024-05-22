import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksModel } from "../../core/models/task.model";


const getTaskState = createFeatureSelector<TasksModel>('task');

export const getTasklist = createSelector(getTaskState, (state) => {
    return state.list;
})

export const getTask = createSelector(getTaskState, (state) => {
    return state.taskobj;
})