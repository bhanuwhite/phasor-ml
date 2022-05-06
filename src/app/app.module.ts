import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MadlibsComponent } from './madlibs/madlibs.component';
import { StoriesComponent } from './stories/stories.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RevealstoryComponent } from './revealstory/revealstory.component';
import { StickerbookComponent } from './stickerbook/stickerbook.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    DashboardComponent,
    MadlibsComponent,
    StoriesComponent,
    RevealstoryComponent,
    StickerbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
