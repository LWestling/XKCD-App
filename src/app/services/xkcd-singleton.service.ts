import { Injectable, Inject, ModuleWithProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { XkcdComic, XkcdAPIService } from './xkcd-api.service';

/*
    Service to share comic data
*/
@Injectable({
    providedIn: "root"
})
export class XkcdSingletonService {
    xkcdComic: Promise<XkcdComic>

    // used to know if the comic is loading and share the comic between components
    updateComic(comicId: Number, xkcdService: XkcdAPIService) : Promise<XkcdComic> {
        this.xkcdComic = xkcdService.getComic(comicId)
        return this.xkcdComic
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: XkcdSingletonService,
            providers: []
        };
    }
}