import { Component } from '@angular/core';
import {GifListComponent} from '../../Components/gif-list/gif-list.component';
import {GifListItemInterface} from '../../Interfaces/gifListItemInterface';

@Component({
  selector: 'app-trending-page',
  imports: [
    GifListComponent
  ],
  templateUrl: './trending-page.component.html'
})
export default class TrendingPageComponent {
  gifListItems: GifListItemInterface[] = [
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',  alt: 'Gallery image 0'  },
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', alt: 'Gallery image 1'  },
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg', alt: 'Gallery image 2'  },
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg', alt: 'Gallery image 3'  },
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg', alt: 'Gallery image 4'  },
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg', alt: 'Gallery image 5'  },
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg', alt: 'Gallery image 6'  },
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg', alt: 'Gallery image 7'  },
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg', alt: 'Gallery image 8'  },
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg', alt: 'Gallery image 9'  },
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',alt: 'Gallery image 10' },
    { class: 'h-auto max-w-full rounded-lg', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',alt: 'Gallery image 11' }
  ];
}
