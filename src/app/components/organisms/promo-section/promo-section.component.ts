import { Component, input, Input, OnInit } from '@angular/core';
import { UserComponent } from '../../molecules/user/user.component';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownListComponent } from '../../atoms/dropdown-list/dropdown-list.component';
import { User } from '../../../models/user';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';
import { Promo } from '../../../models/promo';
import { PromoService } from '../../../services/promo.service';

@Component({
  selector: 'app-promo-section',
  standalone: true,
  imports: [UserComponent, CommonModule, FormsModule, DropdownListComponent, SubtitleComponent],
  templateUrl: './promo-section.component.html',
  styleUrl: './promo-section.component.scss'
})
export class PromoSectionComponent implements OnInit{
  @Input() selectedPromo!: Promo;
  @Input() promoList: Promo[] = [];
  promoListName: string[] = [];
  promoMembers: User[] = []; 
  currentUser!: User;
  memberName: string = '';
  member!: User;

  constructor(private promoService: PromoService, 
    private userService: UserService) {}

  ngOnInit(): void { 
    this.currentUser = this.userService.getUser()();
    this.selectedPromo = this.currentUser.promos[0];
    this.loadPromoList();
    this.getPromoMembers();
    
  }

  loadPromoList(): void {
    this.promoListName = this.promoList.map(promo => promo.name);
  }

  getPromoMembers(): void {
    this.promoService.getPromoMembers(this.selectedPromo.id).subscribe(
      (members: User[]) => {
        this.promoMembers = members.map((member) => {
          // Calculer `fullName` à partir de `firstName` et `lastName`
          const fullName = `${member.firstName} ${member.lastName}`;
          return { ...member, fullName }; // Ajouter `fullName` calculé à chaque membre
        });
      },
      (error) => {
          console.error('Error fetching promo members:', error);
      }
    );
  }

  onPromoSelect(promoId: number): void {
    this.selectedPromo.id = promoId;
  }
}
