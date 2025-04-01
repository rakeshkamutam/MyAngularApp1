import { Component, OnInit } from '@angular/core';
import { UserService } from '../../userservices/user.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterModule,CommonModule,UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  filter: string | null = null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Fetch all users
    this.users = this.userService.getUsers();
    this.filteredUsers = this.users; // Initialize filteredUsers with all users

    // Subscribe to query parameter changes
    this.route.queryParamMap.subscribe((params) => {
      this.filter = params.get('filter');
      this.applyFilter();
    });
  }

  // Apply the filter based on the query parameter
  applyFilter(): void {
    if (this.filter) {
      this.filteredUsers = this.users.filter(
        (user) => user.gender.toLowerCase() === this.filter!.toLowerCase()
      );
    } else {
      this.filteredUsers = this.users; // Show all users if no filter is applied
    }
  }
}
