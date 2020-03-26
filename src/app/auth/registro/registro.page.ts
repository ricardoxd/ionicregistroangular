import { Component, OnInit} from  '@angular/core';
import { Router } from  "@angular/router";
import { AutenticadorService } from './../../servicios/autenticador.service';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
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
  logins_form:string = 'Log in';
  constructor(private _translate:TranslateService,private  authService:  AutenticadorService, private  router:  Router,public loadingController: LoadingController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this._translate.use(this.language);
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
    this._translate.use(this.language);
    this._translate.get('name').subscribe ((res: string) => {            
      this.name_form = res; 
      });
    this._translate.get('email').subscribe ((res: string) => {            
        this.email_form = res; 
      });
    this._translate.get('confirmemail').subscribe ((res: string) => {            
        this.confirmemail_form = res; 
      });
    this._translate.get('password').subscribe ((res: string) => {            
        this.password_form = res; 
      });
    this._translate.get('confirmpassword').subscribe ((res: string) => {            
        this.confirmpassword_form = res; 
      });
    this._translate.get('phone').subscribe ((res: string) => {            
        this.phone_form = res; 
      });
    this._translate.get('accept').subscribe ((res: string) => {            
        this.accept_form = res; 
      });
    this._translate.get('term').subscribe ((res: string) => {            
        this.term_form = res; 
      });
    this._translate.get('signup').subscribe ((res: string) => {            
        this.signup_form = res; 
      });
    this._translate.get('login').subscribe ((res: string) => {            
        this.login_form = res; 
      });
  }
}
