// import { Injectable } from '@angular/core';
// import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

// interface User {
//   id: number;
//   username: string;
//   password: string;
// }

// interface Task {
//   id: number;
//   description: string;
//   title: string;
// }

// interface MockDb {
//   users: User[];
//   tasks: Task[];
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class MockServices implements InMemoryDbService {
//   createDb() {
//     const users: User[] = [
//       { id: 1, username: 'usuario1', password: 'contraseña1' },
//       { id: 2, username: 'usuario2', password: 'contraseña2' },
//       { id: 3, username: 'abc', password: '123' }
//     ];
    
//     const tasks: Task[] = [
//       { id: 1, title: 'Tarea 1', description: 'Descripción 1' },
//       { id: 2, title: 'Tarea 2', description: 'Descripción 2' },
//       { id: 3, title: 'Tarea 3', description: 'Descripción 3' }
//     ];

//     return { users, tasks }; // Retorna tanto usuarios como tareas en la base de datos
//   }

//   post(reqInfo: RequestInfo) {
//     if (reqInfo.collectionName === 'login') {
//       return this.authenticate(reqInfo);
//     }
//     return undefined;
//   }

//   get(reqInfo: RequestInfo) {
//     if (reqInfo.collectionName === 'list') { // Verifica si la colección solicitada es 'tasks'
      
//       return this.listTasks(reqInfo);
//     }
//     return undefined;
//   }

//   private authenticate(reqInfo: RequestInfo) {
//     const { username, password } = reqInfo.utils.getJsonBody(reqInfo.req);
//     const db = reqInfo.utils.getDb() as MockDb;
//     console.log(db, 'users')
//     const users = db.users;

//     const user = users.find((u: User) => u.username === username && u.password === password);

//     const responseOptions: ResponseOptions = user ? {
//       status: 200,
//       body: { message: 'Login exitoso', token: this.generateToken(user) }
//     } : {
//       status: 401,
//       body: { error: 'Nombre de usuario o contraseña incorrectos' }
//     };

//     return reqInfo.utils.createResponse$(() => responseOptions);
//   }

//   private generateToken(user: User): string {
//     const payload = { id: user.id, username: user.username };
//     return btoa(JSON.stringify(payload));
//   }


//   private listTasks(reqInfo: RequestInfo) {
//     const db = reqInfo.utils.getDb() as MockDb;
//     const tasks = db.tasks;

//     const responseOptions: ResponseOptions = tasks ? {
//       status: 200,
//       body: { tasks: tasks }
//     } : {
//       status: 404,
//       body: { error: 'No se encontraron tareas' }
//     };

//     return reqInfo.utils.createResponse$(() => responseOptions);
//   }

// }
