import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class AppServiceService {

  constructor(private http: HttpClient) { }

  geturl(path: string, param: any[]) {

    let url_map = environment.services.filter(x => x.code == path);

    let url = environment.todoApi_url + url_map[0].url;

    if (param) {
      param.forEach(x => {
        url = url + "/" + x;
      });
    }
    return url;
  }

  get<T>(url: string, param?: any[]) {

    let urlparam = this.geturl(url, param);

    return this.http.get<T>(urlparam);
  }

  post<T>(url: string, body: any){
    
    let urlparam = this.geturl(url, null);

    return this.http.post<T>(urlparam,body);
  }

  put<T>(url: string,body:any, param?:any[]){
  
    let urlparam = this.geturl(url, param);

    return this.http.put<T>(urlparam,body);
  }

  delete<T>(url: string, param: any[]) {

    let urlparam = this.geturl(url, param);

    return this.http.delete<T>(urlparam);
  }
}