import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-dashboard-layouts',
  templateUrl: './dashboard-layouts.component.html',
  styleUrls: ['./dashboard-layouts.component.css']
})
export class DashboardLayoutsComponent {

  private authService = inject( AuthService );

  public user = computed(() => this.authService.currentUser() );

  onLogout() {
    this.authService.logout();
  }

}
