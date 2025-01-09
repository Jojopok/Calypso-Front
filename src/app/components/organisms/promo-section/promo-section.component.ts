import { Component, input, Input } from '@angular/core';
import { UserComponent } from '../../molecules/user/user.component';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownListComponent } from '../../atoms/dropdown-list/dropdown-list.component';
import { User } from '../../../models/user';
import { TitleComponent } from "../../atoms/title/title.component";
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
export class PromoSectionComponent {
  @Input() selectedPromo!: Promo;
  @Input()promoList: Promo[] = [];
  promoMembers: User[] = []; 

  constructor(private promoService: PromoService) {}

  ngOnInit(): void {
    if (this.promoList && this.selectedPromo) {
      this.getPromoMembers(); 
    }
  }

  onPromoSelect(promoId: number): void {
    this.selectedPromo.id = promoId;
    this.getPromoMembers();  
  }

  private getPromoMembers() {
    this.promoService.getPromoMembers(this.selectedPromo.id).subscribe({
      next: (members) => {
        this.promoMembers = members.map((member: any) => {
          return {
            ...member, 
            fullName: member.fullName  
          };
        });
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des membres de la promo:', error);
      }
    });
  }
}
