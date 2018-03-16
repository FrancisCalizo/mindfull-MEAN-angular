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

    // Getting MORNING entry details
    getMorningId(id){
      return this.http.get(`${environment.apiBase}/dashboard/morningfull/${id}`,
            { withCredentials: true })
            .toPromise()
            .then(res => res.json())
            // .map(res => res.json())
    }

      // Getting Evening entry details
      getEveningId(id){
        return this.http.get(`${environment.apiBase}/dashboard/eveningfull/${id}`,
              { withCredentials: true })
              .toPromise()
              .then(res => res.json())
              // .map(res => res.json())
      }
}
