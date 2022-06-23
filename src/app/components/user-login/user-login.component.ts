import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    email: [''],
    password: ['']
  })

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  signInUser(){
    this.userService.login(this.form.value)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

}
