import { ManagedramaComponent } from './../managedrama/managedrama.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { OnlyAdminUsersGuard } from './admin-user-guard';
import { UpdatedramaComponent } from '@app/updatedrama/updatedrama.component';

const routes: Routes = [{
  path: 'admin',
  canActivate: [OnlyAdminUsersGuard],
  children: [{
    path: '',
    component: AdminComponent,
  },
  {
    path:'adddrama',
    component: ManagedramaComponent,
  },
  {
    path:'editdrama',
    component: UpdatedramaComponent,
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
