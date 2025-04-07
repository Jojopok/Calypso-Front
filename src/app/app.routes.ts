import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/templates/main-layout/main-layout.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AlgoComponent } from './components/pages/algo/algo.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { AdminUsersComponent } from './components/pages/admin-users/admin-users.component';
import { BugComponent } from './components/pages/bug/bug.component';
import { NewAlgoComponent } from './components/pages/new-algo/new-algo.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  // Pages sans layout
  { path: '', component: LandingPageComponent }, // Page d'accueil/ connexion
  { path: 'register', component: RegisterPageComponent }, // Page d'inscription

  // Pages avec le layout principal
  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'home', component: HomePageComponent }, // Page d'accueil après connexion
      { path: 'profil', component: UserProfileComponent }, // Page de profil utilisateur
      { path: 'algo', component: AlgoComponent }, // Page mes algorithme
      {
        path: 'algo/:id',
        loadComponent: () => import('./components/pages/algo-show/algo-show.component').then(m => m.AlgoShowComponent)
      },
      { path: 'editAlgo', component: NewAlgoComponent }, // Page edit/new algorithme
      { path: 'admin', component: AdminComponent }, // Page administrateur
      { path: 'droits', component: AdminUsersComponent }, // Page d'amdinistration des utilisateurs
      { path: 'bug', component: BugComponent }, // Page d'amdinistration des bugs
    ],
  },

  // Redirection pour les routes non définies
  { path: '**', redirectTo: '' },
];
