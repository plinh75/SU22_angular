import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminPrdDetailComponent } from './pages/admin/admin-product/admin-prd-detail/admin-prd-detail.component';
import { AdminPrdFormComponent } from './pages/admin/admin-product/admin-prd-form/admin-prd-form.component';
import { AdminPrdListComponent } from './pages/admin/admin-product/admin-prd-list/admin-prd-list.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CateDetailComponent } from './pages/client/cate-detail/cate-detail.component';
import { CategoryComponent } from './pages/client/category/category.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ProductListComponent } from './pages/client/product-list/product-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/:_id',
        component: ProductDetailComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'category/:_id',
        component: CateDetailComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard], // đưa vào để kiểm soát login trc khi vào ad
    children: [
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
          }, 
          //đẩy admin/products/id xuống dưới cùng tránh nhầm id='create'
          {
            path: ':_id',
            component: AdminPrdDetailComponent
          },
        ]
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            component: AdminUserListComponent
          }
        ]
      }
    ]

  },
  // {
  //   path: 'users',
    
  // },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
  //   //1. nếu có children thì k dùng component để render
  //   //2. nếu vẫn muốn sd component (khung layout) thì trong component sẽ phải có router-outlet
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] // đưa vào để router bên trên can use
})
export class AppRoutingModule { }
