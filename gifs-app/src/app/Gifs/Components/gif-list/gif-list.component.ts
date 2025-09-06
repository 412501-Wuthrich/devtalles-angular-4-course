import {Component, input} from '@angular/core';
import {GifListItemComponent} from './gif-list-item/gif-list-item.component';
import {Gif} from '../../Interfaces/gif.interface';

@Component({
  selector: 'app-gif-list',
  imports: [
    GifListItemComponent
  ],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css'
})
export class GifListComponent {
  gifList = input.required<Gif[]>();

}
