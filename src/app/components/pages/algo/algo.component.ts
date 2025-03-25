import { Component, OnInit } from '@angular/core';
import { FilterBarComponent } from "../../organisms/filter-bar/filter-bar.component";
import { ButtonComponent } from "../../atoms/button/button.component";
import { AlgoService } from "../../../services/algo.service";
import { TypeService } from "../../../services/type.service";
import { Algo } from "../../../models/algo";
import { Type } from "../../../models/type";
import {AlgoCardComponent} from "../../molecules/algo-card/algo-card.component";
import {NgForOf} from "@angular/common";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-algo',
  standalone: true,
  imports: [
    FilterBarComponent,
    ButtonComponent,
    AlgoCardComponent,
    NgForOf
  ],
  templateUrl: './algo.component.html',
  styleUrl: './algo.component.scss'
})
export class AlgoComponent implements OnInit {
  algos: Algo[] = [];
  filteredAlgos: Algo[] = [];
  categories: Type[] = [];
  searchQuery: string = '';
  selectedCategory: string | null = null;
  showCompleted: boolean = false;
  categoriesNom: string[] = [];
  currentUser!: User;
  userRole!: string;

  constructor(private algoService: AlgoService, private typeService: TypeService, private userService: UserService, private router: Router ) {}

  ngOnInit() {
    this.currentUser = this.userService.getUser()();
    this.userRole = this.currentUser.roles[0];
    this.loadAlgos();
    this.loadTypes();
  }

  loadAlgos(): void {
    this.algoService.getAlgos().subscribe(
      (algos: Algo[]) => {
        this.algos = algos;
        this.filteredAlgos = [...algos];
      },
      (error) => {
        console.error('Erreur lors de la récupération des algos:', error);
      }
    );
  }

  getAlgoColor(algo: Algo): string {
      return algo.type[0]?.color ?? '#cccccc';
  }


  getAlgoLogo(algo: Algo): string {
    return algo.type?.[0]?.logo ?? '/assets/icons/algo.svg';
  }


  loadTypes(): void {
    this.typeService.getTypes().subscribe(types => {
      this.categoriesNom = ['Tous', ...Array.from(new Set(types.map(type => type.type)))];
    });
  }

  handleSearch(query: string): void {
    this.searchQuery = query;
    this.applyFilters();
  }

  handleCategorySelect(categoryNom: string): void {
    this.selectedCategory = categoryNom === 'Tous' ? null : categoryNom;
    this.applyFilters();
  }


  handleCompletedToggle(isCompleted: boolean): void {
    this.showCompleted = isCompleted;
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = this.algos.filter(algo => {
      let matchesSearchQuery = this.searchQuery
        ? algo.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;

      let matchesCompletion = this.showCompleted && algo.userAnswer
        ? algo.userAnswer.some(answer => answer.userId === this.currentUser.id && answer.isRight)
        : true;

      let matchesCategory = this.selectedCategory
        ? algo.type.some(type => type.type === this.selectedCategory)
        : true;

      return matchesSearchQuery && matchesCategory && matchesCompletion;
    });

    this.filteredAlgos = filtered;
  }

  goToAlgo(id: number): void {
    this.router.navigate(['/algo', id]);
  }
}
