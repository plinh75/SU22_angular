import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminPrdDetailComponent } from './pages/admin/admin-product/admin-prd-detail/admin-prd-detail.component';
import { AdminPrdFormComponent } from './pages/admin/admin-product/admin-prd-form/admin-prd-form.component';
import { AdminPrdListComponent } from './pages/admin/admin-product/admin-prd-list/admin-prd-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children:[
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'users',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'users',
      //   component: UserComponent
      // }
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminPrdListComponent
          },
          {
            path: 'create',
            component: AdminPrdFormComponent
          },
          {
            path: 'edit/:_id',
            component: AdminPrdFormComponent
          }, //đẩy admin/products/id xuống dưới cùng tránh nhầm id='create'
          {
            path:':_id',
            component: AdminPrdDetailComponent
          }, 
        ]
      }
    ]
    
  }
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   //1. nếu có children thì k dùng component để render
  //   //2. nếu vẫn muốn sd component (khung layout) thì trong component sẽ phải có router-outlet
  //   children: [
  //     // {
  //     //   path: '',
  //     //   component: UserComponent
  //     // },
  //     {
  //       path: 'create',
  //       component: UserFormComponent
  //     },
  //     {
  //       path: 'edit',
  //       component: UserFormComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
