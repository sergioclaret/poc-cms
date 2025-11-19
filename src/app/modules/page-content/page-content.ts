import { NgComponentOutlet, NgForOf } from '@angular/common';
import { Component, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterOutlet } from '@angular/router';
import { CustomFields } from '../custom-fields/custom-fields';
import { Field } from '../../shared/interfaces/field';
import { InputTypeEnum } from '../../inputTypeEnum';
import { TextFieldComponent } from '../../shared/components/text-field-component/text-field-component';
import { TextAreaFieldComponent } from '../../shared/components/text-area-field-component/text-area-field-component';
import { LinkFieldComponent } from '../../shared/components/link-field-component/link-field-component';
import { EmailFieldComponent } from '../../shared/components/email-field-component/email-field-component';
import { PasswordFieldComponent } from '../../shared/components/password-field-component/password-field-component';
import { ColorFieldComponent } from '../../shared/components/color-field-component/color-field-component';
import { NumberFieldComponent } from '../../shared/components/number-field-component/number-field-component';
import { DateFieldComponent } from '../../shared/components/date-field-component/date-field-component';
import { TimeFieldComponent } from '../../shared/components/time-field-component/time-field-component';
import { DateTimeFieldComponent } from '../../shared/components/date-time-field-component/date-time-field-component';
import { ImageFieldComponent } from '../../shared/components/image-field-component/image-field-component';
import { FileFieldComponent } from '../../shared/components/file-field-component/file-field-component';
import { GroupFieldComponent } from '../../shared/components/group-field-component/group-field-component';
import { RepeaterFieldComponent } from '../../shared/components/repeater-field-component/repeater-field-component';
import { SelectFieldComponent } from '../../shared/components/select-field-component/select-field-component';
import { MultiSelectFieldComponent } from '../../shared/components/multi-select-field-component/multi-select-field-component';
import { BooleanFieldComponent } from '../../shared/components/boolean-field-component/boolean-field-component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-content',
  imports: [RouterOutlet, NgComponentOutlet, NgForOf, 
    MatGridListModule, MatButtonModule, CustomFields],
  templateUrl: './page-content.html',
  styleUrl: './page-content.scss',
})
export class PageContent {
fields: Field[] = []

  componentsMap: Record<InputTypeEnum, Type<any>> = {
    [InputTypeEnum.text]: TextFieldComponent,
    [InputTypeEnum.textArea]: TextAreaFieldComponent,
    [InputTypeEnum.link]: LinkFieldComponent,
    [InputTypeEnum.email]: EmailFieldComponent,
    [InputTypeEnum.password]: PasswordFieldComponent,
    [InputTypeEnum.color]: ColorFieldComponent,
    [InputTypeEnum.number]: NumberFieldComponent,
    [InputTypeEnum.date]: DateFieldComponent,
    [InputTypeEnum.time]: TimeFieldComponent,
    [InputTypeEnum.dateTime]: DateTimeFieldComponent,
    [InputTypeEnum.image]: ImageFieldComponent,
    [InputTypeEnum.file]: FileFieldComponent,
    [InputTypeEnum.group]: GroupFieldComponent,
    [InputTypeEnum.repeater]: RepeaterFieldComponent,
    [InputTypeEnum.select]: SelectFieldComponent,
    [InputTypeEnum.multiselect]: MultiSelectFieldComponent,
    [InputTypeEnum.boolean]: BooleanFieldComponent
  }

  myForm = new FormGroup({

  })

  getComponentFor(field: any): Type<any> {
    console.log(field)

    const typed = field as {type: InputTypeEnum}
    return this.componentsMap[typed.type] ?? TextFieldComponent
  }

  addTextField() {
    this.fields.push({
      name: "test",
      label: "Teste",
      type: InputTypeEnum.text,
      value: "Apenas um teste do Sergio"
    })
  }
  
  addImageField() {
    this.fields.push({
      name: "test2",
      label: "Teste",
      type: InputTypeEnum.image,
      value: "https://www.bing.com/rp/WolXT0CQYS0wYqf6yEezati6rBo.png"
    })
  }

  showJson() {
    alert(JSON.stringify(this.fields))
  }

  clear() {
    this.fields = []
  }
}
