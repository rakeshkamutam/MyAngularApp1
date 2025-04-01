import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Coupon {
  couponId: number;
  couponCode: string;
  discountAmount: number;
  minAmount: number;
}

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit {
  coupon: Coupon = {
    couponId: 0,
    couponCode: '',
    discountAmount: 0,
    minAmount: 0
  };

  ngOnInit(): void {
      this.deleteCoupon();
  }

  successMessage: string = '';
  errorMessage: string = '';
  isDeleting = false;

  constructor(private apiService: ApiserviceService) {}

  deleteCoupon(): void {
    if (this.coupon.couponId <= 0) {
      this.errorMessage = 'Please enter valid coupon details.';
      this.autoHideMessage();
      return;
    }

    if (confirm(`Are you sure you want to delete coupon ID ${this.coupon.couponId}?`)) {
      this.isDeleting = true;
      this.apiService.deleteCoupon(this.coupon).subscribe({
        next: () => {
          this.successMessage = `Coupon with ID ${this.coupon.couponId} deleted successfully!`;
          this.errorMessage = '';

          // Reset form after deletion
          this.coupon = { couponId: 0, couponCode: '', discountAmount: 0, minAmount: 0 };
          
          this.autoHideMessage();
        },
        error: (error) => {
          this.errorMessage = `Error deleting coupon: ${error.message}`;
          this.successMessage = '';
          this.autoHideMessage();
        },
        complete: () => {
          this.isDeleting = false;
        }
      });
    }
  }  

  private autoHideMessage(): void {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 3000);
  }
}
