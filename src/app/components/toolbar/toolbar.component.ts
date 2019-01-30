import { Component } from '@angular/core';
import { Location } from '@angular/common'

import { XkcdComic } from 'src/app/services/xkcd-api.service'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { XkcdSingletonService } from 'src/app/services/xkcd-singleton.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [Location]
})
export class ToolbarComponent {
  readonly MaxXkcdComicNumber : number = 2103
  randomId: Number
  location: Location
  xkcdSingleton: XkcdSingletonService

  constructor(location: Location, xkcdSingleton: XkcdSingletonService,
				iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // number will be used if the random comic button is used
    this.location = location
    this.randomId = Math.round(Math.random() * 2103)
    this.xkcdSingleton = xkcdSingleton

    iconRegistry.addSvgIcon("previous-page", sanitizer.bypassSecurityTrustResourceUrl("assets/icons/arrow-left.svg"))
    iconRegistry.addSvgIcon("menu-icon", sanitizer.bypassSecurityTrustResourceUrl("assets/icons/dots-vertical.svg"))
    iconRegistry.addSvgIcon("random-icon", sanitizer.bypassSecurityTrustResourceUrl("assets/icons/dice-multiple.svg"))
  }

  generateId() {
    this.randomId = Math.round(Math.random() * this.MaxXkcdComicNumber)
  }

  goToPreviousPage() {
    // quick hack to not make it possible to go further back than the home page
    if (window.location.pathname != "/home") {
      this.location.back()
    }
  }

  getComicPromise() : Promise<XkcdComic> {
    return this.xkcdSingleton.xkcdComic
  }
}
