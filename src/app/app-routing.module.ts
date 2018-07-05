import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomePageComponent} from "./home/home-page/home-page.component";
import {ProfileComponent} from "./profile/profile.component";
import {HomeModule} from "./home/home.module";
import {ProfileModule} from "./profile/profile.module";

const routes: Routes = [

  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    HomeModule,
    ProfileModule
  ],
  exports: [RouterModule],
  entryComponents: [
    HomePageComponent,
    ProfileComponent
  ]
})
export class AppRoutingModule {
}
