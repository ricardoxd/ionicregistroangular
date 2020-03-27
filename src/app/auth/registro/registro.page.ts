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

  languaje: string = 'EN';
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
  changelanguaje(){  
    this.languaje = this.languaje === 'EN' ? 'ES' : 'EN';
  }
}
