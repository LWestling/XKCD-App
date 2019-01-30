import { Component } from '@angular/core';
import { XkcdSingletonService } from '../services/xkcd-singleton.service';
import { XkcdComic } from '../services/xkcd-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css']
})
export class AppRootComponent {
  xkcdSingleton: XkcdSingletonService

  constructor (xkcdSingleton: XkcdSingletonService) {
    this.xkcdSingleton = xkcdSingleton
  }

  getComicPromise() : Promise<XkcdComic> {
    return this.xkcdSingleton.xkcdComic
  }
}
