import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

<<<<<<< HEAD
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { CorrentistaComponent } from './components/correntista/correntista.component';

registerLocaleData(localePt);

=======
>>>>>>> a4f9bf7e1a502d70626b1c7d741f1168d0217d25
@NgModule({
  declarations: [
    AppComponent,
    MovimentacaoListComponent,
<<<<<<< HEAD
    MovimentacaoNewComponent,
    CorrentistaComponent
=======
    MovimentacaoNewComponent
>>>>>>> a4f9bf7e1a502d70626b1c7d741f1168d0217d25
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
=======
    HttpClientModule
  ],
  providers: [],
>>>>>>> a4f9bf7e1a502d70626b1c7d741f1168d0217d25
  bootstrap: [AppComponent]
})
export class AppModule { }
