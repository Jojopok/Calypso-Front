import { Component } from '@angular/core';
import {NewAlgoFormComponent} from "../../organisms/new-algo-form/new-algo-form.component";

@Component({
  selector: 'app-new-algo-page',
  standalone: true,
  imports: [
    NewAlgoFormComponent
  ],
  templateUrl: './new-algo-page.component.html',
  styleUrl: './new-algo-page.component.scss'
})
export class NewAlgoPageComponent {

}
