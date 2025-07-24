import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  private testUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {   // 👈 Explicitly mention it returns Observable of array
    return this.http.get<any[]>(this.testUrl);
  }
}
