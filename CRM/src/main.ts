import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

import { provideMatDatepicker } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideMatDatepicker(),           // 📅 Datepicker Services
    provideNativeDateAdapter(),       // 📆 DateAdapter (das fehlte!)
    provideAnimations()               // ✨ Optional, aber empfohlen
  ]
}).catch((err) => console.error(err));