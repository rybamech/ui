import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatsComponent} from "./stats/stats.component";
import {CampaignsComponent} from "./campaigns/campaigns.component";
import {StatsModule} from "./stats/stats.module";
import {CampaignsModule} from "./campaigns/campaigns.module";
import {CountriesComponent} from "./countries/countries.component";
import {CountriesModule} from "./countries/countries.module";
import {ModelsComponent} from "./models/models.component";
import {ReferalCampaignsComponent} from "./referal-campaigns/referal-campaigns.component";
import {ReferalsComponent} from "./referals/referals.component";
import {ModelsModule} from "./models/models.module";
import {ReferalCampaignsModule} from "./referal-campaigns/referal-campaigns.module";
import {ReferalsModule} from "./referals/referals.module";
import {MembersComponent} from "./members/members.component";
import {MembersModule} from "./members/members.module";

const routes: Routes = [
  {
    path: 'stats',
    component: StatsComponent,
    loadChildren: './stats/stats.module#StatsModule'
  },
  {
    path: 'campaigns',
    component: CampaignsComponent,
    loadChildren: './campaigns/campaigns.module#CampaignsModule'
  },
  {
    path: 'countries',
    component: CountriesComponent,
    loadChildren: './countries/countries.module#CountriesModule'
  },
  {
    path: 'members',
    component: MembersComponent,
    loadChildren: './members/members.module#MembersModule'
  },
  {
    path: 'models',
    component: ModelsComponent,
    loadChildren: './models/models.module#ModelsModule'
  },
  {
    path: 'referal-campaigns',
    component: ReferalCampaignsComponent,
    loadChildren: './referal-campaigns/referal-campaigns.module#ReferalCampaignsModule'
  },
  {
    path: 'referals',
    component: ReferalsComponent,
    loadChildren: './referals/referals.module#ReferalsModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StatsModule,
    CampaignsModule,
    CountriesModule,
    ModelsModule,
    ReferalCampaignsModule,
    ReferalsModule,
    MembersModule
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [
    StatsComponent,
    CampaignsComponent,
    CountriesComponent,
    ModelsComponent,
    ReferalCampaignsComponent,
    ReferalsComponent
  ]
})
export class ProfileRoutingModule { }
