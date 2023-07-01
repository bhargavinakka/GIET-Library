import { Component } from '@angular/core';
import { Registration } from '../Models/registration';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  reg:Registration =new Registration();
  registrationsform!:FormGroup;

  constructor(private formbuild:FormBuilder){}

  ngOnInit(){
    this.registrationsform=this.formbuild.group({
      Email: new FormControl(
        '',
        Validators.compose([
        Validators.required,
        Validators.pattern('([a-zA-Z0-9]| |/|\\|@|#|\$|%|&)+'),
      ])
      ),
      Username: new FormControl(
        '',
        Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.maxLength(8),
        Validators.pattern('([a-zA-Z0-9]| |/|\\|@|#|\$|%|&)+'),
      ])
      ),
      Password: new FormControl(
        '',
        Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.maxLength(8),
        Validators.pattern('([a-zA-Z0-9]| |/|\\|@|#|\$|%|&)+'),
      ])
      )
    })
  }
    Submit(){
      console.log(this.reg);
  }
}