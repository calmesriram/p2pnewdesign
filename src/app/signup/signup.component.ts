import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup,FormControl} from '@angular/forms';
import { AuthenticationService, TokenPayload } from '../services/authentication.service';
import { Router } from '@angular/router';


declare var $: any;



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  angForm: FormGroup;
  submitted = false;
  public fname:any;
  public lname:any;
  public phnumber;
  public myemail;
  public pwd;
  
  myangForm: FormGroup;
  // submitted = false;
  public myemaillogin:any;
  public pwdlogin:any;

  constructor(private fb:FormBuilder,private auth: AuthenticationService, private router: Router) { 
      
  } 
  ngOnInit() {
    // this.nav.visible=true;
    this.myangForm = this.fb.group({
        myemaillogin: ['', Validators.required],
        pwdlogin: ['', Validators.required]
    }); 

      this.angForm = this.fb.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        phnumber: ['', Validators.required],
        myemail: ['', Validators.required],
        pwd: ['', Validators.required]
    }); 

  }

  Reg() {
        this.submitted = true; 
        console.log(this.angForm.value);
    // stop here if form is invalids
    if (this.angForm.invalid) {
        return;
    }    
    var d = {
      email:this.angForm.value.myemail,
      firstname:this.angForm.value.fname,
      lastname:this.angForm.value.lname,
      password:this.angForm.value.pwd,
      phonenumber:this.angForm.value.phnumber,
      keys:"",
      name:"",
      _id:""      
    }        

  console.log(d);
        console.log("Register 1 ......... ")
        this.auth.register(d).subscribe(() => {
    
          console.log("Register ......... ")
          this.router.navigateByUrl('/signup');
          this.refresh();
        }, (err) => {
    
          console.log("Register error......... ")
          console.error(err);
        });
      }
    
      refresh(): void {
    
        console.log("Refresh ......... ")
        // window.location.href = '/login';
        this.router.navigateByUrl("/signup");
        window.location.reload();
      }

  login(){
    this.submitted = true; 
    // stop here if form is invalid
    if (this.myangForm.invalid) {
        return;
    }
    
     var d = {
       email:this.myangForm.value.myemaillogin,
       password:this.myangForm.value.pwdlogin,
       keys: "",
       _id: ""
     }  
     console.log(d)
     this.auth.login(d).subscribe((user) => {
      console.log("user details   =>", user)
      console.log("Login successful")     
       this.router.navigateByUrl("/menu");
      
    }, (err) => {
      console.error(err);
    });
  }

}


