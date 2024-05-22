export interface Tasks {
  id: number,
  title: string,
  description: string,
  status: boolean
  // associategroup: string,
}

export interface TasksModel{
  list:Tasks[],
  taskobj:Tasks ,
  errormessage:string
}