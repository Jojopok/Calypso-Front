import { Component, OnInit} from '@angular/core';
import { CkeditorComponent } from "../../atoms/ckeditor/ckeditor.component";
import { ButtonComponent } from "../../atoms/button/button.component";
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { SubtitleComponent } from "../../atoms/subtitle/subtitle.component";
import { Algo } from '../../../models/algo';
import { AlgoService } from '../../../services/algo.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Type } from '../../../models/type';
import { TypeService } from '../../../services/type.service';
import { MultiSelectComponent } from "../../atoms/multi-select/multi-select.component";
import { AppToastService } from '../../../services/app-toast.service';
import { Router } from '@angular/router';
import { NgbDropdownToggle, NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-new-algo',
  standalone: true,
  imports: [CkeditorComponent, ButtonComponent, InputFieldComponent, SubtitleComponent, FormsModule, ReactiveFormsModule, MultiSelectComponent, NgbRating, NgbDropdownToggle],
  providers: [NgbRatingConfig],
  templateUrl: './new-algo.component.html',
  styleUrl: './new-algo.component.scss'
})
export class NewAlgoComponent implements OnInit {
  currentUser!: User;
  categories!: string[];
  categorie: string = '';
  selectedCategories!: string [];
  isEdit: boolean = false;
  algo: Algo = new Algo(
    0,
    '',    // title
    '',  // content
    '',  // answer
    true,                  // isVisible
    new Date(),            // createdAt
    null,            // updatedAt
    0,                     // difficultyId
    [],                    // type (tableau vide ou tableau de Type[])
    [],                    // userAnswer (tableau vide ou tableau de UserAnswer[])
    0                      // userId
  );
  algoId!: number;
  
  title: string = '';
  types!: Type[];
  content: string = '';
  answer:string = '';
  difficultyId: number = 0;
  selected!: number;
  hovered!: number;
	readonly = false;

  constructor(private userService : UserService,
              private algoService: AlgoService,
              private typeService: TypeService, 
              private toastservice: AppToastService,
              private router: Router,
              config: NgbRatingConfig
  ) {
    config.max = 5;
  }

  ngOnInit() {
    this.loadTypes();
    this.currentUser = this.userService.getUser()();
  }

  loadTypes() {
    console.log('Chargement des types');
    this.typeService.getTypes().subscribe((types) => {
      this.categories = types.map(type => type.type); 
      this.types = types;
      this.isEdit ? this.loadAlgoData() : this.initForm();
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
      console.log('Initialisation du formulaire');
      console.log('types',this.types)
      this.algo.userId = this.currentUser.id;
      this.selectedCategories = [];
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

  // Méthode pour mettre à jour les données de l'algo
  onTitleChange(event: any): void {
    console.log('Titre modifié:', event.target.value);
    const value = event.target.value;
    this.algo.title = value;
  }

  onCategorieSelect(categories: string[]): void {
    console.log('Catégories sélectionnées:', categories);
    this.selectedCategories = categories;
    // Filtrer les types en fonction de la sélection des catégories
    this.algo.type = this.types.filter(type => {
      return categories.some(category => type.type.includes(category));
    });
    console.log('Types sélectionnés:', this.algo.type);
  }

  onDataChange(newData: string, field: string): void {
    field == 'content' ? this.algo.content = newData : this.algo.answer = newData;
    console.log('Données modifiées:', field, newData);
  }

  onRatingChange(rating: number): void {
    this.algo.difficultyId = rating;
    console.log('Difficulté sélectionnée:', this.algo.difficultyId);  
  } 

  onSubmit() {
    if (this.isEdit) {
      console.log('Mise à jour de l\'algorithme:', this.algo);
      this.algoService.updateAlgo(this.algo).subscribe(
        response => {
          this.toastservice.showSuccess('Bravo', 'Algorithme modifié avec succès');
          this.router.navigate(['/algo']);
        console.log('Algorithme mis à jour:', response);
      },
      error => {
        this.toastservice.showDanger('Erreur', 'Erreur lors de la moification de l\'algorithme');
        console.error('Erreur lors de la mise à jour de l\'algorithme', error);
      });
    } else {
      console.log('Creation de l\'algorithme:', this.algo);
      this.algoService.addAlgo(this.algo).subscribe(
        response => {
          console.log('Nouvel algorithme ajouté:', response);
          this.toastservice.showSuccess('Bravo', 'Algorithme ajouté avec succès');
          this.router.navigate(['/algo']);
        },
        error => {
          this.toastservice.showDanger('Erreur', 'Erreur lors de l\'ajout de l\'algorithme');
          console.error('Erreur lors de la mise à jour de l\'algorithme', error);
        });
    }
  }
}
