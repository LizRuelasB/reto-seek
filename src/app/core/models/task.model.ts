export interface Tasks {
  id: number,
  title: string,
  description: string,
  status: boolean
}

export interface TasksModel{
  list:Tasks[],
  taskobj:Tasks ,
  errormessage:string
}