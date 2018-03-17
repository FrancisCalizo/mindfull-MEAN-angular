import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  constructor( private http: Http ) { }

  // Retrieve all Entries for the Dashboard
  retrieveEntries(){
    return this.http.get(`${environment.apiBase}/dashboard`,
    { withCredentials: true })
    .map(res => res.json())
  }

  // Read Morning entry details
  getMorningId(id){
    return this.http.get(`${environment.apiBase}/dashboard/morningfull/${id}`,
      { withCredentials: true })
      .toPromise()
      .then(res => res.json())
      // .map(res => res.json())
  }

  // Read Evening entry details
  getEveningId(id){
    return this.http.get(`${environment.apiBase}/dashboard/eveningfull/${id}`,
      { withCredentials: true })
      .toPromise()
      .then(res => res.json())
      // .map(res => res.json())
  }

  // Using promise to Create New Morningfull
  createNewMorning(dataToSend){
  return this.http  
    .post(`${environment.apiBase}/dashboard/morningfull/new`, dataToSend, { withCredentials: true})
    .toPromise()
    .then(res => res.json());
  }

  // Using promise to Create New Morningfull
  createNewEvening(dataToSend){
    return this.http  
      .post (`${environment.apiBase}/dashboard/eveningfull/new`, dataToSend, { withCredentials: true})
      .toPromise()
      .then(res => res.json());
    }  


  // Delete Morningfull
  deleteMorning(id){
    return this.http.delete(`${environment.apiBase}/dashboard/morningfull/${id}`,
        { withCredentials: true })
        .toPromise()
  }

  // Delete Eveningfull
  deleteEvening(id){
    return this.http.delete(`${environment.apiBase}/dashboard/eveningfull/${id}`,
        { withCredentials: true })
        .toPromise()
  }

  // Update Morningfull 
  updateMorning(id, updates){
    return this.http.put(`${environment.apiBase}/dashboard/morningfull/edit/${id}`, updates, { withCredentials: true })
    .map(res => res.json());
  }

  // Update Eveningfull 
  updateEvening(id, updates){
    return this.http.put(`${environment.apiBase}/dashboard/eveningfull/edit/${id}`, updates, { withCredentials: true })
    .map(res => res.json());
  }
}
