import { Component, OnInit} from  '@angular/core';
import { Router } from  "@angular/router";
import { AutenticadorService } from './../../servicios/autenticador.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  password_type: string = 'password';
  password_type2: string = 'password';
  
  eye_type: string = 'eye-off';
  eye_type2: string = 'eye-off';

  language: string = 'EN';

  name_form:string = 'Name';
  email_form:string = 'e-mail';
  confirmemail_form:string = 'Confirm e-mail';
  password_form:string = 'Password';
  confirmpassword_form:string = 'Confirm Password';
  phone_form:string = 'Phone';
  accept_form:string = 'I accept the';
  term_form:string = 'terms and conditions';
  signup_form:String = 'Sign up';
  login_form:string = 'Log in';
  constructor(private  authService:  AutenticadorService, private  router:  Router,public loadingController: LoadingController) { }

  ngOnInit() {
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();

    console.log('Loading dismissed!');
  }
  registrar(form) {
    this.presentLoading();
    this.authService.registrar(form.value).then((res)=>{
      if(res!=null){
        this.router.navigateByUrl('inicio'); 
      }else{
        console.log("error");
      }
   });
  }
  togglePasswordMode() {   
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
    this.eye_type = this.eye_type === 'eye-off' ? 'eye' : 'eye-off';
 }  
  togglePasswordMode2() {   
    this.password_type2 = this.password_type2 === 'text' ? 'password' : 'text';
    this.eye_type2 = this.eye_type2 === 'eye-off' ? 'eye' : 'eye-off';
  } 
  changelanguage(){  
    this.language = this.language === 'EN' ? 'ES' : 'EN';
    this.name_form = this.name_form === 'Name' ? 'Nombre' : 'Name';
    this.email_form = this.email_form === 'e-mail' ? 'Correo electronico' : 'e-mail';
    this.confirmemail_form = this.confirmemail_form === 'Confirm e-mail' ? 'Correo electronico' : 'Confirm e-mail';
    this.password_form = this.password_form === 'Password' ? 'Contraseña' : 'Password';
    this.confirmpassword_form = this.confirmpassword_form === 'Confirm Password' ? 'Confirmar contraseña' : 'Confirm Password';
    this.phone_form = this.phone_form === 'Phone' ? 'Telefono' : 'Phone';
    this.accept_form = this.accept_form === 'I accept the' ? 'Yo acepto los' : 'I accept the';
    this.term_form = this.term_form === 'terms and conditions' ? 'terminos y condiciones' : 'terms and conditions';
    this.signup_form = this.signup_form === 'Sign up' ? 'Registro' : 'Sign up';
    this.login_form = this.login_form === 'Log in' ? 'Iniciar sesion' : 'Log in';
    
  }
}
