import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

interface User {
  id: number;
  username: string;
  password: string;
}


interface MockDb {
  users: User[];
}

@Injectable({
  providedIn: 'root',
})
export class MockServices implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { id: 1, username: 'usuario1', password: 'contraseña1' },
      { id: 2, username: 'usuario2', password: 'contraseña2' },
      { id: 3, username: 'abc', password: '123' }
    ];
    

    return { users }; 
  }

  post(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'login') {
      return this.authenticate(reqInfo);
    }
    return undefined;
  }


  private authenticate(reqInfo: RequestInfo) {
    const { username, password } = reqInfo.utils.getJsonBody(reqInfo.req);
    const db = reqInfo.utils.getDb() as MockDb;
 
    const users = db.users;

    const user = users.find((u: User) => u.username === username && u.password === password);

    const responseOptions: ResponseOptions = user ? {
      status: 200,
      body: { message: 'Login exitoso', token: this.generateToken(user) }
    } : {
      status: 401,
      body: { error: 'Nombre de usuario o contraseña incorrectos' }
    };

    return reqInfo.utils.createResponse$(() => responseOptions);
  }

  private generateToken(user: User): string {
    const payload = { id: user.id, username: user.username };
    return btoa(JSON.stringify(payload));
  }

}
