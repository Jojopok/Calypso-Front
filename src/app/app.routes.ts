import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';

export const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },             
  { path: 'register', component: RegisterPageComponent },      
  { path: 'profil', component: UserProfileComponent },
  {path: 'home', component:LandingPageComponent}, //Modifier la route avec le composant de la Home       
  { path: '**', redirectTo: '' }                               
];
