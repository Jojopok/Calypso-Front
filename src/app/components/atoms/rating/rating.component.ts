import { Component } from '@angular/core';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [StarRatingModule],
  providers: [StarRatingConfigService],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {

}
