import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  constructor( private http: Http ) { }

  retrieveEntries(){
    return this.http.get(`${environment.apiBase}/dashboard`,
    { withCredentials: true })
    .map(res => res.json())
  }
}
