import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenFormComponent {
 paysList = [
    { value: 'ma', label: 'Maroc' },
    { value: 'fr', label: 'France' },
    { value: 'be', label: 'Belgique' },
    { value: 'ch', label: 'Suisse' },
    { value: 'ca', label: 'Canada' },
    { value: 'us', label: 'USA' }
  ];

  user = {
    fullname: '',
    age: null as number | null,
    country: '',
    email: ''
  };

  submittedData: any = null;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submittedData = { ...this.user };
      console.log('Données soumises :', this.submittedData);
    }
  }
}