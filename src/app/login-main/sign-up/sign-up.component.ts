import {Component, ElementRef, OnInit, ViewChildren} from '@angular/core';
import {FormBuilder, FormControlName, FormGroup, Validators} from "@angular/forms";
import {GenericValidator} from "../../shared/generic-validator";
import {debounceTime, fromEvent, merge, Observable} from "rxjs";
import {PasswordMatcher} from "../../shared/PasswordMatcher";
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
// Access every form input fields in our signup html file
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  signupForm: FormGroup;
  loading:boolean=false;
  success:boolean|null=null;
  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;

  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router,private apiService:ApiService) {
    // Define an instance of the validator for use with this form,
    this.genericValidator = new GenericValidator();
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: PasswordMatcher.match });
    if (this.authService.isLoggedIn()){
      this.router.navigate(['board'])
    }
  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.signupForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.signupForm);
    });
  }

  signup() {
    this.signupForm.value.role="Etudiant";
    console.log('---form', this.signupForm.value);
    this.loading=true;
    setTimeout(() => {
      this.authService.signup(this.signupForm.value).subscribe(
        (d) => {
          if (d!=null)
          {
            console.log(d);
            this.success=true;
            this.apiService.add("request",this.signupForm.value).subscribe(
              ()=>{
              })
          }
          else {
            this.success=false;
          }
        }
      )

      this.loading = false;
    }, 1900);


    setTimeout(() => {
      if (this.success==true)
      this.router.navigate(['login'])
    },5000)
  }
}


