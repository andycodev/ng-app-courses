import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createUser(){
    this.userService.register(this.form.value.email)
      .then(response => {
        this.router.navigate(['/login'])
        console.log(response);
      })
      .catch(error => console.log(error));
  }

}
