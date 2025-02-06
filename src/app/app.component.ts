import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './Component/Page/main/main.component';
import { SignUpComponent } from './Component/Components/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MainComponent, SignUpComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cinema-app';
  currentView: string = 'sign-up'; 
  showView(view: string) {
    this.currentView = view;
  }
 
}
