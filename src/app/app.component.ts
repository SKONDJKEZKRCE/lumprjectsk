import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';  // Importation du composant Navbar
import { SidebarComponent } from './sidebar/sidebar.component';  // Importation du composant Sidebar
import { StatsGridComponent } from 
import { RecentInvoicesComponent } from './recent-invoices/recent-invoices.component';  

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    NavbarComponent,
    SidebarComponent,
    StatsGridComponent,
    RecentInvoicesComponent,
  
  ]
})
export class AppComponent {
  title = 'lumcomproject';
}
