import { Component, OnInit} from '@angular/core';
import { CkeditorComponent } from "../../atoms/ckeditor/ckeditor.component";
import { ButtonComponent } from "../../atoms/button/button.component";
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { SubtitleComponent } from "../../atoms/subtitle/subtitle.component";
import { RatingComponent } from "../../atoms/rating/rating.component";
import { Algo } from '../../../models/algo';
import { AlgoService } from '../../../services/algo.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Type } from '../../../models/type';
import { TypeService } from '../../../services/type.service';
import { MultiSelectComponent } from "../../atoms/multi-select/multi-select.component";

@Component({
  selector: 'app-new-algo',
  standalone: true,
  imports: [CkeditorComponent, ButtonComponent, InputFieldComponent, SubtitleComponent, RatingComponent, FormsModule, ReactiveFormsModule, MultiSelectComponent],
  templateUrl: './new-algo.component.html',
  styleUrl: './new-algo.component.scss'
})
export class NewAlgoComponent implements OnInit {
  categories!: string[];
  categorie: string = '';
  selectedCategories!: string [];
  isEdit: boolean = true;
  algo!: Algo;
  algoId!: number;
  
  title: string = '';
  types!: Type[];
  content: string = '';
  answer:string = '';
  difficultyId!: Number;

  constructor(private algoService: AlgoService,
              private typeService: TypeService
  ) {}

  ngOnInit() {
    this.loadTypes();
    this.isEdit ? this.loadAlgoData() : this.initForm();
  }

  loadTypes() {
    this.typeService.getTypes().subscribe((types) => {
      this.categories = types.map(type => type.type); 
    });
  }

  // Initialisation du formulaire
  initForm(): void {
    if(this.isEdit) {
    console.log('Initialisation du formulaire');
      this.title = this.algo.title;
      this.types = this.algo.type;
      this.content = this.algo.content;
      this.answer = this.algo.answer;
      this.difficultyId = this.algo.difficultyId;
      this.selectedCategories = this.algo.type.map(item => item.type);
    } else {
      this.title = '';
      this.types = [];
      this.content = '';
      this.answer = '';
    }
  }

  // Fonction pour charger l'algorithme existant (si en mode édition)
  loadAlgoData() {
    console.log('Chargement des données de l\'algorithme');
    this.algoService.getAlgoById(2).subscribe(algo => {
      this.algo = algo;
      this.initForm();
    });
  }

  onCategorieSelect(categories: string[]): void {
    this.categories = categories;
  }

  onSubmit() {
    this.algo.title = this.title;
    this.algo.type = this.types;
    this.algo.content = this.content;
    this.algo.answer = this.answer;
    this.algo.difficultyId = 1;
    this.algo.updatedAt = new Date();
    if (this.isEdit) {
      console.log('Mise à jour de l\'algorithme:', this.algo);
      this.algoService.updateAlgo(this.algo).subscribe(response => {
        console.log('Algorithme mis à jour:', response);
      });
    } else {
      this.algoService.addAlgo(this.algo).subscribe(response => {
        console.log('Nouvel algorithme ajouté:', response);
      });
    }
  }
}
