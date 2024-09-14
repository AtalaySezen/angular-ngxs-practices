import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { NgxsModule } from '@ngxs/store';
import { EmployeeState } from './shared/store/EmployeeState';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NgxsModule.forRoot([EmployeeState])),
    provideHttpClient()
  ]
};
