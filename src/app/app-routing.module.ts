import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameComponent } from './game/game.component';
import { MadlibsComponent } from './madlibs/madlibs.component';
import { RevealstoryComponent } from './revealstory/revealstory.component';
import { StoriesComponent } from './stories/stories.component';


const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: DashboardComponent},
  { path: 'madlibs', component: MadlibsComponent},
  { path: 'madlibs/games', component: GameComponent},
  { path: 'madlibs/stories', component: StoriesComponent},
  { path: 'madlibs/stories/reveal', component: RevealstoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
