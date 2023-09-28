import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myForm!: FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup{
    return this.fb.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    }
    console.log(this.myForm.value);
    
  }

  public get f():any{
    return this.myForm.controls;

  }

}
