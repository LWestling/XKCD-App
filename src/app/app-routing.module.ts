import { NgModule, Injector } from '@angular/core';
import { UIRouterModule, Transition, UIRouter } from "@uirouter/angular";
import { XkcdAPIService } from './services/xkcd-api.service';
import { ComicComponent } from './components/comic/comic.component';
import { XkcdSingletonService } from './services/xkcd-singleton.service';

const States = [
  {
    name: "random",
    url: "/comic/:id",
    component: ComicComponent,
    resolve: [
    {
      token: 'xkcdComic',
      deps: [Transition, XkcdAPIService, XkcdSingletonService],
      // load the comic data to the component depending on the url
      resolveFn: (transition: Transition, xkcdAPIService: XkcdAPIService, xkcdSingleton: XkcdSingletonService) =>
          xkcdSingleton.updateComic(transition.params().id, xkcdAPIService)
    }]
  },
  {
    name: "default",
    url: "/home",
    component: ComicComponent,
    resolve: [
    {
      token: 'xkcdComic',
      deps: [Transition, XkcdAPIService, XkcdSingletonService],
      // load the comic data to the component depending on the url
      resolveFn: (transition: Transition, xkcdAPIService: XkcdAPIService, xkcdSingleton: XkcdSingletonService) =>
          xkcdSingleton.updateComic(1304, xkcdAPIService)
    }]
  }
]

@NgModule({
  imports: [UIRouterModule.forRoot({ states: States, config: routerConfig })],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }

export function routerConfig(router: UIRouter, injector: Injector) {
  router.urlService.rules.otherwise({ state: "default" })
}