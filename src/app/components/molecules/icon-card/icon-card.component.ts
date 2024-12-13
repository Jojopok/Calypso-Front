import { Component, Input } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { Router } from '@angular/router';
import { IconContainerComponent } from "../../atoms/icon-container/icon-container.component";
import { TitleComponent } from '../../atoms/title/title.component';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';

@Component({
  selector: 'app-icon-card',
  standalone: true,
  imports: [IconComponent, SubtitleComponent, IconContainerComponent],
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
  
})
export class IconCardComponent {
  @Input() iconSrc!: string;
  @Input() label!: string;
  @Input() route!: string; 

  constructor(private router: Router) {}

  navigate(): void {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
