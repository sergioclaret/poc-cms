import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-field-component',
  imports: [],
  templateUrl: './image-field-component.html',
  styleUrl: './image-field-component.scss',
})
export class ImageFieldComponent {
  @Input() value: any
}
