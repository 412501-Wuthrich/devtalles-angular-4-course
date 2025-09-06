import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type { GiphyResponse} from '../Interfaces/giphyResponse';
import {environment} from '../../../environments/environment';
import {Gif} from '../Interfaces/gif.interface';
import {GifMapper} from '../mapper/gif.mapper';
import {createWebpackLoggingCallback} from '@angular-devkit/build-angular/src/tools/webpack/utils/stats';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient)

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true)

  constructor() {
    this.loadTrendingGifs()
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.apiUrlBase}/gifs/trending`,{
      params: {
        api_key: environment.gifApiKey,
        limit: 20
      }
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp)
      console.log({gifs})
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false)
    })
  }
}
