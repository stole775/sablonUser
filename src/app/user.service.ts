import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://it255.glitch.me/users';

constructor(private http: HttpClient) { }

getAll(): Observable<User[]> {
  return this.http.get<User[]>(this.apiUrl);
}

getOneByID(id: number): Observable<User> {
  return this.http.get<User>(`${this.apiUrl}/${id}`);
}

create(User: User): Observable<User> {
  return this.http.post<User>(this.apiUrl, User);
}

update(id: number, User: User): Observable<User> {
  return this.http.put<User>(`${this.apiUrl}/${id}`, User);
}
updateUser(User: User): Observable<User> {
  const url = `${this.apiUrl}/${User.id}`;
  return this.http.put<User>(url, User);
}


delete(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}
