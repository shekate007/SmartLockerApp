import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SmartlockerService } from 'src/app/services/smartlocker.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private smartLock: SmartlockerService) { }

  open() {
    this.smartLock.sendSignal('/', 'open');
  }

  close() {
    this.smartLock.sendSignal('/', 'close');
  }

  exit() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }

}
