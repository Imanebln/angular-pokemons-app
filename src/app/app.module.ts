import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { PockemonCardComponent } from './pockemon-card/pockemon-card.component';
import { EditableElementComponent } from './editable-element/editable-element.component';
import { ListingRouteComponent } from './listing-route/listing-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailsRouteComponent } from './details-route/details-route.component';
import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';
import { CreateRouteComponent } from './create-route/create-route.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PockemonCardComponent,
    EditableElementComponent,
    ListingRouteComponent,
    AboutRouteComponent,
    NavigationComponent,
    DetailsRouteComponent,
    NotFoundRouteComponent,
    CreateRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
