import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'sharede-menu',
  templateUrl: './menu.component.html',
  styles: [
  `  .p-menuitem-badge {
      background-color: #ffeb3b !important;
      color: red;
      font-size: 0.8em;
      }
      .custom-badge {
  background-color: #f00; /* Red background */
  color: #fff; /* White text */
  border-radius: 50%; /* Make the badge round */
  padding: 5px 10px; /* Adjust padding as needed */
}
`
  
  ],
})
export class MenuComponent implements OnInit{

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                // badge: 'p-badge-warning',
                // badgeStyleClass: 'p-badge-warning',
                items : [
                  {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-align-center',
                    routerLink: '/',
                   
                  },
                  {
                    label: 'Numeros',
                    icon: 'pi pi-dollar',
                    routerLink: 'numbers'
                  },
                  {
                    label: 'No Comunes',
                    icon: 'pi pi-globe',
                    routerLink: 'uncommon'
                  }
                ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog',
                items: [
                  {
                    label: 'Custom Pipes',
                    icon: 'pi pi-cog',
                    routerLink: 'custom'
                  }
                ]
            },
          
        //   {
        //       label: 'Quit',
        //       icon: 'pi pi-fw pi-power-off',
        //       badge: ' ',
        //       badgeStyleClass: 'pi pi-bell ml-1 p-badge-danger',
        //   }
      
        ];
    }

}
