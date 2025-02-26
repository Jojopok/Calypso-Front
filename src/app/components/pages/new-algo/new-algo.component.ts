import { Component, OnInit } from '@angular/core';
import { CkeditorComponent } from "../../atoms/ckeditor/ckeditor.component";
import { DropdownListComponent } from "../../atoms/dropdown-list/dropdown-list.component";
import { ButtonComponent } from "../../atoms/button/button.component";
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { SubtitleComponent } from "../../atoms/subtitle/subtitle.component";
import { RatingComponent } from "../../atoms/rating/rating.component";

@Component({
  selector: 'app-new-algo',
  standalone: true,
  imports: [CkeditorComponent, DropdownListComponent, ButtonComponent, InputFieldComponent, SubtitleComponent, RatingComponent],
  templateUrl: './new-algo.component.html',
  styleUrl: './new-algo.component.scss'
})
export class NewAlgoComponent implements OnInit {
  categories: any = ''
  categorie: string = '';
  isEdit: boolean = false;

  ngOnInit() {
    if(this.isEdit){
      
    }
  }
  onCategorieSelect(categorie: string): void {
    this.categorie = categorie;
  }
}
