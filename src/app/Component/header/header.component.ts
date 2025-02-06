import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrangchuComponent } from '../Components/trangchu/trangchu.component';
import { SeeAMovieComponent } from '../Components/see-amovie/see-amovie.component';
import { FindATheatreComponent } from '../Components/find-atheatre/find-atheatre.component';
import { FoodAndDrinkComponent } from '../Components/food-and-drink/food-and-drink.component';
import { OffersComponent } from '../Components/offers/offers.component';
import { DiscountsComponent } from '../Components/discounts/discounts.component';
import { OnDemandComponent } from '../Components/on-demand/on-demand.component';
import { GiftCardsComponent } from '../Components/gift-cards/gift-cards.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule,TrangchuComponent, SeeAMovieComponent, FindATheatreComponent,
      FoodAndDrinkComponent,OffersComponent,DiscountsComponent,OnDemandComponent,GiftCardsComponent,SignUpComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  currentView: string = 'trangchu'; // Mặc định hiển thị Trang Chủ
  showView(view: string) {
    this.currentView = view;
  }
}
