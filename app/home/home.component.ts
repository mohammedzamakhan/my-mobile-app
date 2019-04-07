import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent {
  title = 'my-mobile-app';
  private counter = 42;

  constructor(private translate: TranslateService) {

  }

  public getMessage() {
    return this.counter > 0 ?
      `${this.counter} taps left` :
      'Hoorraaay! You unlocked the NativeScript clicker achievement!';
  }

  setEnglish() {
    this.translate.setDefaultLang('en');
  }

  setSpanish() {
    this.translate.setDefaultLang('es');
  }

  public onTap() {
    this.counter--;
  }
}
