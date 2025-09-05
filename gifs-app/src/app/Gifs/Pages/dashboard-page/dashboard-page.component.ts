import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideMenuHeaderComponent} from '../../Components/side-menu-header/side-menu-header.component';
import {SideMenuOptionsComponent} from '../../Components/side-menu-options/side-menu-options.component';
import {SideMenuComponent} from '../../Components/side-menu/side-menu.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterOutlet,
    SideMenuComponent
  ],
  templateUrl: './dashboard-page.component.html'
})
export default class DashboardPageComponent {

}
