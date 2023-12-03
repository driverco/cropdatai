import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  error!: String;
  usernm!: String;
  paswd!: String;

  constructor(private authService: AuthService, private router: Router) { }

  private _errorType: string = '';
  @Input() set errorType(errorType: string) {
    this._errorType = errorType;
    this.updateErrorType(this._errorType);
  }
  get errorType(): string {
    return this._errorType;
  }
  updateErrorType(errorCode: string) {
    this.error = (() => {
      switch (errorCode) {
        case 'unauthorized':
          return 'No estás autorizado para ver esta página';
          break;
        case 'invalidUsername':
          return 'Usuario no Válido';
          break;
        case 'invalidPassword':
          return 'contraseña requerida';
          break;

        default:
          return '';
      }
      return '';
    })();
  }

  login() {
    this.errorType = '';
    if (!this.usernm) {
      this.errorType = 'invalidUsername';
      return;
    }
    if (this.usernm.length < 1) {
      this.errorType = 'invalidUsername';
      return;
    }
    if (!this.paswd) {
      this.errorType = 'invalidPassword';
      return;
    }
    if (this.paswd.length < 1) {
      this.errorType = 'invalidPassword';
      return;
    }
    if (this.authService.authenticate(this.usernm, this.paswd)){
      this.router.navigate(["/home"]);
    }


  }
}
