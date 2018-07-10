import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AboutComponent } from './components/about/about.component';
import { VideoComponent } from './components/video/video.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'video', component: VideoComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
