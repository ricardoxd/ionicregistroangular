import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {
  public apiUrl = 'http://www.mocky.io';
  
  constructor(public http: HttpClient) { }
  registrar(data){
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/v2/5e7bb8b02d00005e6311a4f0', JSON.stringify(data),{headers})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(null);
        });
    });
  }
  
}
