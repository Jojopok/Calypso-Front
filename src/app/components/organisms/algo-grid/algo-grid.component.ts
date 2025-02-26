import {Component, Input} from '@angular/core';
import {AlgoCardComponent} from "../../molecules/algo-card/algo-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-algo-grid',
  standalone: true,
  imports: [
    AlgoCardComponent,
    NgForOf
  ],
  templateUrl: './algo-grid.component.html',
  styleUrl: './algo-grid.component.scss'
})
export class AlgoGridComponent {
  @Input() algos: any[] = [];
}
