import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  // バックエンドのAPIのURLを指定  
  readonly apiUrl = 'http://localhost:5094/api/UserInfoes/';

  // 依存としてHttpClientサービスをアプリケーションクラスに注入
  constructor(private http: HttpClient) { }

  // ユーザー情報リストを取得するためのHttpリクエストを行う関数
  getUserInfoList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /*
  // ユーザー情報を追加するためのHttpリクエストを行う関数
  addUser(userinfo: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl, userinfo, httpOptions);
  }
  */

  // ユーザー情報を更新するためのHttpリクエストを行う関数
  updateUser(id: any, userinfo: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + id, userinfo, httpOptions);
  }

  /*
  // ユーザー情報を削除するためのHttpリクエストを行う関数
  deleteUser(Id: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(this.apiUrl + Id, httpOptions);
  }
  */
}
