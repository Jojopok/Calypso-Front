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
import { ActivatedRoute, Params, Router } from '@angular/router';
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
              private route: ActivatedRoute,
              config: NgbRatingConfig
  ) {
    config.max = 5;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.isEdit = params['isEdit'] === 'true';
      this.algoId = params['id'];
  
      this.currentUser = this.userService.getUser()();
      this.loadTypes();
    });
  }

  loadTypes() {
    this.typeService.getTypes().subscribe((types) => {
      this.categories = types.map(type => type.type); 
      this.types = types;
      this.isEdit ? this.loadAlgoData() : this.initForm();
    });
  }

  // Initialisation du formulaire
  initForm(): void {
    if(this.isEdit && this.algoId) {
      this.title = this.algo.title;
      this.types = this.algo.type;
      this.content = this.algo.content;
      this.answer = this.algo.answer;
      this.difficultyId = this.algo.difficultyId;
      this.selectedCategories = this.algo.type.map(item => item.type);
    } else {
      this.algo.userId = this.currentUser.id;
      this.selectedCategories = [];
    }
  }

  // Fonction pour charger l'algorithme existant (si en mode édition)
  loadAlgoData() {
    this.algoService.getAlgoById(this.algoId).subscribe(algo => {
      this.algo = algo;
      this.initForm();
    });
  }

  // Méthode pour mettre à jour les données de l'algo
  onTitleChange(event: any): void {
    const value = event.target.value;
    this.algo.title = value;
  }

  onCategorieSelect(categories: string[]): void {
    this.selectedCategories = categories;
    // Filtrer les types en fonction de la sélection des catégories
    this.algo.type = this.types.filter(type => {
      return categories.some(category => type.type.includes(category));
    });
  }

  onDataChange(newData: string, field: string): void {
    field == 'content' ? this.algo.content = newData : this.algo.answer = newData;
  }

  onRatingChange(rating: number): void {
    this.algo.difficultyId = rating;
  } 

  onSubmit() {
    if (this.isEdit) {
      this.algoService.updateAlgo(this.algo).subscribe(
        response => {
          this.toastservice.showSuccess('Bravo', 'Algorithme modifié avec succès');
          this.router.navigate(['/algo']);
      },
      error => {
        this.toastservice.showDanger('Erreur', 'Erreur lors de la moification de l\'algorithme');
      });
    } else {
      this.algoService.addAlgo(this.algo).subscribe(
        response => {
          this.toastservice.showSuccess('Bravo', 'Algorithme ajouté avec succès');
          this.router.navigate(['/algo']);
        },
        error => {
          this.toastservice.showDanger('Erreur', 'Erreur lors de l\'ajout de l\'algorithme');
        });
    }
  }
}
