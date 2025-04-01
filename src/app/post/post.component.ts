import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { RouterModule } from '@angular/router';

interface Coupon {
  couponId: number;
  couponCode: string;
  discountAmount: number;
  minAmount: number;
}

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  payload: Coupon = {
    couponId: 0,
    couponCode: '',
    discountAmount: 0,
    minAmount: 0,
  };
  @Input() d1: any;
  datapost: any;
  errorMessage: string = '';
  successMessage: string = '';
  isSubmitting = false; // To prevent multiple submissions

  constructor(private apiService: ApiserviceService) {}

  ngOnInit(): void {}

  sendData(): void {    

    this.isSubmitting = true;
    this.apiService.postData(this.payload).subscribe({
      next: (response) => {
        this.datapost = response;
        this.successMessage = 'Coupon submitted successfully!';
        this.errorMessage = '';
        console.log('Data posted successfully:', response);

        // Reset form after submission
         this.payload = { couponId: 0, couponCode: 'AAA', discountAmount: 1, minAmount: 1 };

        this.autoHideMessage();
      },
      error: (error) => {
        this.errorMessage = 'Error posting data: ' + error.message;
        this.successMessage = '';
        console.error('Error posting data:', error);
        this.autoHideMessage();
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }

  onSubmit(): void {
    if (!this.isSubmitting) {
      this.sendData();
    }
  }

  private autoHideMessage(): void {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 5000);
  }
}
