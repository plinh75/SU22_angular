import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { TableNameComponent } from './table/table-name/table-name.component';
import { TableGenderComponent } from './table/table-gender/table-gender.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableStatusComponent } from './table/table-status/table-status.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminPrdListComponent } from './pages/admin/admin-product/admin-prd-list/admin-prd-list.component';
import { AdminPrdDetailComponent } from './pages/admin/admin-product/admin-prd-detail/admin-prd-detail.component';
import { AdminPrdFormComponent } from './pages/admin/admin-product/admin-prd-form/admin-prd-form.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './pages/client/product-list/product-list.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { CategoryComponent } from './pages/client/category/category.component';
import { CateDetailComponent } from './pages/client/cate-detail/cate-detail.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component'


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNameComponent,
    TableGenderComponent,
    NameComponent,
    IdentityComponent,
    TableStatusComponent,
    TableAvatarComponent,
    FormComponent,
    ShowValidateComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    HomeComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminPrdListComponent,
    AdminPrdDetailComponent,
    AdminPrdFormComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductDetailComponent,
    CategoryComponent,
    CateDetailComponent,
    AdminUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
