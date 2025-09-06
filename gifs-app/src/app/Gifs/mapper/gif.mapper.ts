import {Gif} from '../Interfaces/gif.interface';
import {GiphyResponse} from '../Interfaces/giphyResponse';

export class GifMapper {
  static mapGiphyItemsToGifArray(response: GiphyResponse): Gif[] {
    return response.data.map(gif => ({
      id: gif.id,
      title: gif.title,
      url: gif.images['original']['url']
    }));
  }
}
