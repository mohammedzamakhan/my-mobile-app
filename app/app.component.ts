import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setTranslation('en', {
      hello: 'hello world'
    });

    this.translate.setTranslation('es', {
      hello: 'hallo warld'
    });

    this.translate.setDefaultLang('en');
  }
}
