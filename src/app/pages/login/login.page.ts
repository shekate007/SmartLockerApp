import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    console.log('submit');
    console.log(this.user);
    console.log(form);
    if (this.user.email != 'felixgeorge@hotmail.com' && this.user.password != '12345') {
      this.validationAlert('The user and password are incorrect');
    } else if (this.user.email != 'felixgeorge@hotmail.com') {
      this.validationAlert('The user is incorrect');
    } else if (this.user.password != '12345') {
      this.validationAlert('The password is incorrect');
    } else {
      this.successAlert();
      setTimeout(() => {
        this.alertCtrl.dismiss();
        this.router.navigate(['/home']);
      }, 1500);
    }
  }

  async validationAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Uuups',
      // subHeader: 'Important message',
      message: message,
      backdropDismiss: false,
      buttons: ['OK']
    });

    await alert.present();
  }

  async successAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Done',
      // subHeader: 'Important message',
      message: 'validated!',
      backdropDismiss: false,
      // buttons: ['OK']
    });

    await alert.present();
  }
}
