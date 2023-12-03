import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ɵɵinject } from '@angular/core';

// Define the authGuard function, which implements CanActivateFn interface
export const AuthGuard: CanActivateFn = (route, state) => {
  // Use dependency injection to get an instance of the AuthService
  const authService = ɵɵinject(AuthService);
  const router = ɵɵinject(Router);

  // Check if the user is logged in using the AuthService
  if (authService.isAuthenticated()) {
    return true; // If logged in, allow access to the route
  } else {
    return router.createUrlTree(['/login/unauthorized']);
    //return false; // If not logged in, deny access to the route
  }
};
export const AdminGuard: CanActivateFn = (route, state) => {
  // Use dependency injection to get an instance of the AuthService
  const authService = ɵɵinject(AuthService);
  const router = ɵɵinject(Router);

  // Check if the user is logged in using the AuthService
  if (authService.isAdmin()) {
    return true; // If logged in, allow access to the route
  } else {
    return router.createUrlTree(['/home/unauthorized']);
    //return false; // If not logged in, deny access to the route
  }
};
export const LoginGuard: CanActivateFn = (route, state) => {
  // Use dependency injection to get an instance of the AuthService
  const authService = ɵɵinject(AuthService);
  const router = ɵɵinject(Router);

  // Check if the user is logged in using the AuthService
  if (authService.isAuthenticated()) {
    return router.createUrlTree(['/home']);
  } else {
    return true;
  }
};
