import { Component } from '@angular/core';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form';
import { ReactiveFormComponent } from './reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateDrivenFormComponent, ReactiveFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}