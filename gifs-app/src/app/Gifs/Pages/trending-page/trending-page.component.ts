import {Component, inject} from '@angular/core';
import {GifListComponent} from '../../Components/gif-list/gif-list.component';
import {GifsService} from '../../Services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [
    GifListComponent
  ],
  templateUrl: './trending-page.component.html'
})
export default class TrendingPageComponent {
  gifService = inject(GifsService)
}
