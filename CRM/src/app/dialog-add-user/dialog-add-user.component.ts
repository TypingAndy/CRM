import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDatepicker,
    MatNativeDateModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {}
