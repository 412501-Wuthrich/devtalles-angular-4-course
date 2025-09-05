import { Component } from '@angular/core';
import {MenuOptionInterface} from '../../Interfaces/menuOption.interface';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu-options.component.html'
})
export class SideMenuOptionsComponent{
  menuOptions : MenuOptionInterface[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label:'Trending',
      subLabel: 'Gifs Populares',
      router: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label:'Search',
      subLabel: 'Buscar Gifs',
      router: '/dashboard/search'
    }
  ]
}
