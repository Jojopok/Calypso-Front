import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch(error => console.error(error));

