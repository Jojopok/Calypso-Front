import { Component } from '@angular/core';
import { IconCardComponent } from '../../molecules/icon-card/icon-card.component';

@Component({
  selector: 'app-icon-grid',
  standalone: true,
  imports: [IconCardComponent],
  templateUrl: './icon-grid.component.html',
  styleUrl: './icon-grid.component.scss'
})
export class IconGridComponent {

}
