import { Component, Input } from '@angular/core';
import { XkcdComic } from 'src/app/services/xkcd-api.service'

@Component({
  selector: 'comic-component',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {
  comic: XkcdComic
  showSpinner: Boolean // to show loading animation if image is not loaded yet

  // show spinner when the comic is updated
  @Input() set xkcdComic(comic: XkcdComic) {
    this.setImageLoaded(false)
    this.comic = comic
  }

  constructor() {
    this.showSpinner = false
  }

  setImageLoaded(status: Boolean) {
    this.showSpinner = !status
  }

  getComicImageSrc() : String {
    return this.comic.imageSrc
  }
}
