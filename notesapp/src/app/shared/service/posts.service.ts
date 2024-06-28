import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL = ['http://localhost:8000']

@Injectable({
  providedIn: 'root'
})
export class PostsService {



  constructor(private http: HttpClient) { }


  // get all news
  getAll() {
    return this.http.get(`${BASE_URL}/posts`);
  }

  //delete new
  delete (id: any){
    return this.http.delete(`${BASE_URL}/posts/${id}`);
  }

  //add post
  add(data : any){
    return this.http.post(`${BASE_URL}/posts`, data );
  }

  //get item
  get(id:any){
    return this.http.get(`${BASE_URL}/posts/${id}`);
  }


  //edit post
  edit(data :any , id:any){
    return this.http.put(`${BASE_URL}/posts/${id}`, data );
  }
}
