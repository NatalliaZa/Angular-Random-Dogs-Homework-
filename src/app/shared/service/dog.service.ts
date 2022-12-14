import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private httpClient: HttpClient) { }

  getRandomDog(): Observable<any>{
    return this.httpClient.get('https://dog.ceo/api/breeds/image/random')
  }

  getRandomDogs(): Observable<any>{
    return this.httpClient.get('https://dog.ceo/api/breeds/image/random/3')

  }
}
