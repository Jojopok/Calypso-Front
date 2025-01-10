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
  promoMembers: User[] = []; 
  currentUser!: User;
  memberName: string = '';
  member!: User;

  constructor(private promoService: PromoService, 
    private userService: UserService) {}

  ngOnInit(): void { 
    this.currentUser = this.userService.getUser()();
    this.selectedPromo = this.currentUser.promos[0];
    this.getPromoMembers(this.selectedPromo.id);
    
  }

getPromoMembers(promoId: number): void {
  promoId = this.selectedPromo.id;
  this.promoService.getPromoMembers(promoId).subscribe({
    next: (members) => {
      this.promoMembers = members.map(member => ({
        ...member,  
        memberName: `${member.firstName} ${member.lastName}`
      }));
    },
    error: (error) => {
        console.error('Error fetching promo members:', error);
    }
  });
}

  onPromoSelect(promoId: number): void {
    this.selectedPromo.id = promoId;
  }

}
