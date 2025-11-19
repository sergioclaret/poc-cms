import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-text-field-component',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './text-field-component.html',
  styleUrl: './text-field-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldComponent {
  @Input() placeHolder: any
  @Input() value: any
}
