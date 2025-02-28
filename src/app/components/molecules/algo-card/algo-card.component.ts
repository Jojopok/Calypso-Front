import {Component, Input} from '@angular/core';
import {IconContainerComponent} from "../../atoms/icon-container/icon-container.component";
import {IconComponent} from "../../atoms/icon/icon.component";
import {SubtitleComponent} from "../../atoms/subtitle/subtitle.component";
import {TextComponent} from "../../atoms/text/text.component";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-algo-card',
  standalone: true,
  imports: [
    IconContainerComponent,
    IconComponent,
    SubtitleComponent,
    TextComponent,
    NgClass,
    NgStyle
  ],
  templateUrl: './algo-card.component.html',
  styleUrl: './algo-card.component.scss'
})
export class AlgoCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() iconSrc: string = '';
  @Input() footerColor: string = '#1976d2';
  @Input() cardClasses: string[] = ['bg-dark', 'text-white'];
  @Input() iconSize: number = 32;

  onClick() {
    // Logique de navigation ou d'affichage de l'algo
    console.log(`Clicked on: ${this.title}`);
  }
}
