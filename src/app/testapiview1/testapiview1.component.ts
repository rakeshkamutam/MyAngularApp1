import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../TestAPI/testservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testapiview1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './testapiview1.component.html',
  styleUrl: './testapiview1.component.css'
})
export class Testapiview1Component implements OnInit {
  users: any[] = [];
  expandedUserId: number | null = null;
  editMode: { [key: number]: boolean } = {};

  nestedExpanded: {
    [key: number]: {
      basic: boolean;
      address: boolean;
      company: boolean;
    };
  } = {};

  constructor(private testService: TestserviceService) {}

  ngOnInit(): void {
    this.testService.getData().subscribe((data: any[]) => {
      this.users = data;
      data.forEach(user => {
        this.nestedExpanded[user.id] = { basic: false, address: false, company: false };
      });
    });
  }

  toggleExpand(userId: number) {
    this.expandedUserId = this.expandedUserId === userId ? null : userId;
  }

  toggleEdit(userId: number) {
    this.editMode[userId] = !this.editMode[userId];
  }

  toggleSection(userId: number, section: 'basic' | 'address' | 'company') {
    this.nestedExpanded[userId][section] = !this.nestedExpanded[userId][section];
  }

  saveChanges(user: any) {
    console.log('Saved changes (mock):', user);
    this.toggleEdit(user.id);
  }
}
