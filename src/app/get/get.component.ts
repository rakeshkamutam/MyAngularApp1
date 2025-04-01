import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent implements OnInit{

  data: any;
  Jimmy="Parent component";  

  constructor(private apiService: ApiserviceService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
