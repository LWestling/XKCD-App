import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ComicComponent } from './components/comic/comic.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AppRootComponent } from './app-root/app-root.component';
import { XkcdAPIService } from './services/xkcd-api.service';
import { XkcdSingletonService } from './services/xkcd-singleton.service';

@NgModule({
  declarations: [
    ComicComponent,
    ToolbarComponent,
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [XkcdAPIService, XkcdSingletonService],
  bootstrap: [AppRootComponent]
})
export class AppModule { }