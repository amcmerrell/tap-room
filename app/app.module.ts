import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { KegListComponent }   from './keg-list.component';
import { NewKegComponent }   from './new-keg.component';
import { SellBeerComponent }   from './sell-beer.component';
import { LowBeerPipe }   from './low-beer.pipe';
import { EditKegComponent } from './edit-keg.component';
import { PricePipe } from './price.pipe';
import { DeleteKegComponent } from './delete-keg.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    KegListComponent,
    NewKegComponent,
    SellBeerComponent,
    LowBeerPipe,
    EditKegComponent,
    PricePipe,
    DeleteKegComponent,
  ],
  bootstrap:[ AppComponent ]
})

export class AppModule { }
