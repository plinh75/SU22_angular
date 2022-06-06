import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(
    private router: Router // cần có router để điều hướng nếu false
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //1. lấy ra ttin user trong local
    const loggedInUser = localStorage.getItem('loggedInUser')
    //2. ktra xem ttin có chính xác k 
    if (loggedInUser) {
      return true
    }
    //3. đúng thì đi tiếp, sai quay về login
    this.router.navigateByUrl('/auth/login')
    return false
  }

}
