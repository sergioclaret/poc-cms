import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { InputTypeEnum } from '../../inputTypeEnum';

@Component({
  selector: 'app-custom-fields',
  imports: [MatGridListModule, MatButtonModule, MatExpansionModule,
    FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './custom-fields.html',
  styleUrl: './custom-fields.scss',
})
export class CustomFields {

  ngOnInit() {
    
  }

  forms = new FormGroup({
    items: new FormArray<FormGroup>([])
  });

  novoCampo(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      label: new FormControl(''),
      type: new FormControl('')
    });
  }

  adicionarCampo() {
    this.items.push(this.novoCampo())
  }

  get items(): FormArray {
    return this.forms.get('items') as FormArray;
  }

  exibirJson() {
    alert(JSON.stringify(this.forms.value))
  }

}
