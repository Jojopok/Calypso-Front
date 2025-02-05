import { Component } from '@angular/core';
import { IconCardComponent } from '../../molecules/icon-card/icon-card.component';

@Component({
  selector: 'app-admin-icon-grid',
  standalone: true,
  imports: [IconCardComponent],
  templateUrl: './admin-icon-grid.component.html',
  styleUrl: './admin-icon-grid.component.scss'
})
export class AdminIconGridComponent {

}
