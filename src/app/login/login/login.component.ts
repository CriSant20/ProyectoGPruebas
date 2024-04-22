import { Component, OnInit , ElementRef,ViewChild} from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  private $btnSignIn!: Element;
  private $btnSignUp!: Element;
  private $signUp!: Element;
  private $signIn!: Element;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.$btnSignIn = this.elementRef.nativeElement.querySelector('.sign-in-btn');
    this.$btnSignUp = this.elementRef.nativeElement.querySelector('.sign-up-btn');
    this.$signUp = this.elementRef.nativeElement.querySelector('.sign-up');
    this.$signIn = this.elementRef.nativeElement.querySelector('.sign-in');

    document.addEventListener('click', (e) => {
      if (e.target === this.$btnSignIn || e.target === this.$btnSignUp) {
        this.$signIn.classList.toggle('active');
        this.$signUp.classList.toggle('active');
      }
    });
  }


  @ViewChild('passwordField') passwordField!: ElementRef; // Obtén una referencia al campo de contraseña

  togglePasswordVisibility() {
    const passwordField: HTMLInputElement = this.passwordField.nativeElement; // Accede al elemento nativo del campo de contraseña

    // Verifica el tipo de campo de contraseña y cambia entre "password" y "text"
    passwordField.type === "password" ? passwordField.type = "text" : passwordField.type = "password";
  }

}
