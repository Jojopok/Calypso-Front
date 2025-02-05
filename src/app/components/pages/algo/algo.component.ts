import {Component, OnInit} from '@angular/core';
import {FilterBarComponent} from "../../organisms/filter-bar/filter-bar.component";
import {AlgoGridComponent} from "../../organisms/algo-grid/algo-grid.component";
import {ButtonComponent} from "../../atoms/button/button.component";

@Component({
  selector: 'app-algo',
  standalone: true,
  imports: [
    FilterBarComponent,
    AlgoGridComponent,
    ButtonComponent
  ],
  templateUrl: './algo.component.html',
  styleUrl: './algo.component.scss'
})
export class AlgoComponent {
  // Liste des catégories
  categories = [
    { name: 'Catégorie 1', value: 'cat1' },
    { name: 'Catégorie 2', value: 'cat2' },
    { name: 'Catégorie 3', value: 'cat3' },
  ];

  algos = [
    {
      title: 'Algo 1',
      description: 'Bla bla algo trop bien !',
      iconSrc: '/assets/icons/ts-icon.svg', // Chemin vers l'icône
      footerColor: '#1976d2', // Ligne bleue
      isCompleted: true // Algo terminé
    },
    {
      title: 'Algo 2',
      description: 'Un autre algo intéressant.',
      iconSrc: '/assets/icons/js-icon.svg',
      footerColor: '#ff0078', // Ligne bleue
      isCompleted: true // Algo terminé
    }
  ];

  // Liste filtrée (initialisée avec tous les algorithmes)
  filteredAlgos = this.algos;

  // Variables pour les filtres
  searchQuery: string = '';
  selectedCategory: string | null = null;
  showCompleted: boolean = false;

  // Méthode pour appliquer les filtres
  applyFilters() {
    this.filteredAlgos = this.algos.filter(algo => {
      // Vérifie si l'algo correspond à la recherche
      const matchesSearch = this.searchQuery
        ? algo.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;

      // Vérifie si l'algo correspond à la catégorie sélectionnée
      const matchesCategory = this.selectedCategory
        ? algo.title.toLowerCase().includes(this.selectedCategory.toLowerCase()) // Exemple : filtre par titre
        : true;

      // Vérifie si le filtre "Terminé" est activé
      const matchesCompletion = this.showCompleted ? algo.isCompleted : true;

      // Retourne true si l'algo correspond à tous les critères
      return matchesSearch && matchesCategory && matchesCompletion;
    });
  }

  // Gestion des événements de la FilterBar
  handleSearch(query: string) {
    this.searchQuery = query;
    this.applyFilters();
  }

  handleCategorySelect(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  handleCompletedToggle(isCompleted: boolean) {
    this.showCompleted = isCompleted;
    this.applyFilters();
  }
}
