import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserCardComponent } from '../../molecules/user-card/user-card.component';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { AdminFilterBarComponent } from '../../organisms/admin-filter-bar/admin-filter-bar.component';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [AdminFilterBarComponent, UserCardComponent, CommonModule],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.scss'
})
export class AdminUsersComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  @Output() categorySelect = new EventEmitter<string>();
  @Output() completedToggle = new EventEmitter<boolean>();
  

  users!: User[];
  filteredUsers: User[] = []; 
  searchQuery: string = '';
  selectedYear?: number;
  isAdminChecked = false;
  isEditeurChecked = false;
  isWilderChecked = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users.map((user) => {
        // Calculer `fullName` à partir de `firstName` et `lastName`
        let fullName = `${user.firstName} ${user.lastName}`;
        return { ...user, fullName }; 
      });
      this.filteredUsers = [...this.users]; 
    });
  }

  onSearch(searchQuery: string): void {
    this.searchQuery = searchQuery;
    this.applyFilters();
  }

  onSearchChanged(filter: any): void {
    this.searchQuery = filter.value;
    this.applyFilters();
  }

  onYearChanged(year: number): void {
    this.selectedYear = year;
    this.applyFilters();
  }

  onToggleChanged({ isChecked, filterType }: { isChecked: boolean, filterType: string }): void {
    if (filterType === 'admin') {
      this.isAdminChecked = isChecked;
    } else if (filterType === 'editeur') {
      this.isEditeurChecked = isChecked;
    } else if (filterType === 'wilder') {
      this.isWilderChecked = isChecked;
    }
    this.applyFilters();
  }

  // Fonction qui applique tous les filtres
  applyFilters(): void {
    let filtered = this.users.filter(user => {
      let matchesSearchQuery = user.fullName.toLowerCase().includes(this.searchQuery.toLowerCase());

      let matchesYear = this.selectedYear ? user.promos.some(promo => promo.beginAt === this.selectedYear) : true;

      let matchesAdmin = this.isAdminChecked ? user.roles.includes('ADMIN') : true;
      let matchesEditeur = this.isEditeurChecked ? user.roles.includes('EDITEUR') : true;
      let matchesWilder = this.isWilderChecked ? user.roles.includes('USER') : true;

      return matchesSearchQuery && matchesYear && matchesAdmin && matchesEditeur && matchesWilder;
    });

    this.filteredUsers = filtered;
  }
}
