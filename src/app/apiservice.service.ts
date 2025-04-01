import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Coupon {
  couponId: number;
  couponCode: string;
  discountAmount: number;
  minAmount: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://localhost:7001/api/CouponAPI');
  }

  postData(payload: any) {
    return this.http.post('https://localhost:7001/api/CouponAPI', payload);
  }

  // DELETE API that sends JSON body
  deleteCoupon(coupon: Coupon): Observable<any> {
    return this.http.request('DELETE', 'https://localhost:7001/api/CouponAPI', {
      body: coupon, // Passing payload
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
