import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TitleComponent, InputComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
