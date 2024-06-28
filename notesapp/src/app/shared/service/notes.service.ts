import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL = ['http://localhost:8000']

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }


  // get all news
  getAll() {
    return this.http.get(`${BASE_URL}/notes`);
  }

  //delete new
  delete (id: any){
    return this.http.delete(`${BASE_URL}/notes/${id}`);
  }

  //add note
  add(data : any){
    return this.http.post(`${BASE_URL}/notes`, data );
  }

  //get item
  get(id:any){
    return this.http.get<any>(`${BASE_URL}/notes/${id}`);
  }


  //edit note
  edit(data :any , id:any){
    return this.http.put(`${BASE_URL}/notes/${id}`, data );
  }
}
