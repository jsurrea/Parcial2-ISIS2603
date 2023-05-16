import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private apiUrl = 'https://gist.githubusercontent.com/josejbocanegra/fe9511b47ddb335bb0da97ff9ba7462e/raw/a9601bdb1cb26abc1dabec48b7f2417440143541/cafes.json';

  constructor(private http: HttpClient) {}

  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiUrl);
  }
}
