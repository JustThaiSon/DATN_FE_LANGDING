import { Component } from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';
import { HeaderComponent } from '../../header/header.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
 
}
