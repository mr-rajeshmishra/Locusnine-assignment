import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  apiBaseURL = 'http://localhost:49626/api';

  constructor(private httpClient: HttpClient) { }

  public getUsersList(): any{
    return this.httpClient.get(this.apiBaseURL + '/User/GetUsersList');
  }

  public saveUser(user: any): any{
    return this.httpClient.post(this.apiBaseURL + '/User/SaveUser', user);
  }

  public deleteUser(userId = 0): any{
    return this.httpClient.delete(this.apiBaseURL + '/User/DeleteUser?userId=' + userId);
  }

}


