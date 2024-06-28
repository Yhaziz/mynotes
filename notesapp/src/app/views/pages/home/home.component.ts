import { Component } from '@angular/core';
import { NavbarHomeComponent } from '../navbar-home/navbar-home.component';
import { FooterHomeComponent } from '../footer-home/footer-home.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarHomeComponent,FooterHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
