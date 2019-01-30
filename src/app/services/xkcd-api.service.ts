import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

/*
    Service to retrieve data from the XQCD API
*/
@Injectable()
export class XkcdAPIService {
    readonly xkcdJsonPath = "https://xkcd.com/"
    readonly xkcdJsonSuffix = "/info.0.json"
    http: HttpClient

    constructor(http: HttpClient) {
        this.http = http
    }

    /**
     * 
     * @param id The id of the xkcd comic
     * @returns Promise that will publish the XqcdComic object after http data is loaded
     */
    getComic(id: Number) : Promise<XkcdComic> {
        const jsonUrl = `${this.xkcdJsonPath}${id}${this.xkcdJsonSuffix}`

        // Creates XqcdComic from the http data
        return new Promise((resolve, reject) => {
            this.http.get(jsonUrl)
                .subscribe(
                    response => resolve(new XkcdComic(response["img"], response["safe_title"])),
                    error => reject(error)
                )
        })
    }
}

export class XkcdComic {
    imageSrc: String
    title: String

    constructor(imageSrc: String, title: String) {
        this.imageSrc = imageSrc
        this.title = title
    }
}