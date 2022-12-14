import {AfterViewInit, Component, ElementRef, OnInit, ViewChildren} from '@angular/core';
import {FormBuilder, FormControlName, FormGroup, Validators} from "@angular/forms";
import {debounceTime, fromEvent, merge, Observable} from "rxjs";
import {GenericValidator} from "../../shared/generic-validator";
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})

export class LoginComponent implements OnInit, AfterViewInit {
  // Access every form input fields in our login html file
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];
  loginForm!: FormGroup;
  loading:boolean=false;
  loginSuccess:boolean|null=null;
  token:string | undefined;
  role:any;
  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(private fb: FormBuilder,private authService:AuthService,private router: Router,private apiService:ApiService) {
    // Defines all of the validation messages for the form.
    this.validationMessages = {
      username: {
        required: 'Required',
      },
      password: {
        required: 'Required',
        minlength: 'The password length must be greater than or equal to 8'
      }
    };
    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    if (this.authService.isLoggedIn()){
      if (this.role!="Etudiant")
      this.router.navigate(['board'])
    }

  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.loginForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.loginForm);
    });
  }

  login() {
    console.log('---form', this.loginForm.value);
    this.LoginnedAs(this.loginForm.value.username);
    this.loading = true;
    setTimeout(() => {
      this.authService.login(this.loginForm.value.username,this.loginForm.value.password).subscribe(
        (d) => {
          this.token=d.token;
          if (d.token!=null)
          {
            this.loginSuccess=true;
          }
        }
      )
      this.loading = false;
    }, 1900);

    setTimeout(()=>{
      if (this.token!=null)
      {
        if(this.role == "Etudiant"){
          console.log(this.role);
          this.router.navigate(['maintenance'])
          this.authService.logout();
        }
        else{
          console.log(this.role);
          this.router.navigate([''])
        }
      }
    },4100)
    setTimeout(()=>{
      if (this.token==null)
      {
        this.loginSuccess=false;
      }
    },2100)



  }

  LoginnedAs(username:any){

    this.apiService.LoginnedAs(this.loginForm.value.username).subscribe((d) =>
    {
this.role=d;
    })
  }

}
