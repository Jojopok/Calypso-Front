import { Component } from '@angular/core';
import {IconComponent} from "../../atoms/icon/icon.component";
import {TitleComponent} from "../../atoms/title/title.component";

@Component({
  selector: 'app-algo-title',
  standalone: true,
    imports: [
        IconComponent,
        TitleComponent
    ],
  templateUrl: './algo-title.component.html',
  styleUrl: './algo-title.component.scss'
})
export class AlgoTitleComponent {

}
