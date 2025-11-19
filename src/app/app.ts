import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgComponentOutlet, NgForOf } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { CustomFields } from './modules/custom-fields/custom-fields';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgComponentOutlet, NgForOf, 
    MatGridListModule, MatButtonModule, CustomFields],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('poc-cms');

  

}
