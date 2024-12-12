import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AlgoComponent } from './components/pages/algo/algo.component';
import { AdminComponent } from './components/pages/admin/admin.component';

export const appRoutes: Routes = [
  // Pages sans layout 
  { path: '', component: LandingPageComponent }, // Page d'accueil
  { path: 'register', component: RegisterPageComponent }, // Page d'inscription

  // Pages avec le layout principal
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent }, // Page d'accueil après connexion
      { path: 'profil', component: UserProfileComponent }, // Page de profil utilisateur
      { path: 'algo', component: AlgoComponent }, // Page algorithme
      { path: 'admin', component: AdminComponent }, // Page administrateur
    ],
  },

  // Redirection pour les routes non définies
  { path: '**', redirectTo: '' },
];
