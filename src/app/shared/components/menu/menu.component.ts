import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'sharede-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                items : [
                  {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-align-center',
                    routerLink: '/'
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
                    label: 'Otro Elemento',
                    icon: 'pi pi-cog'
                  }
                ]
            },
            {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {
                      label: 'Left',
                      icon: 'pi pi-fw pi-align-left'
                  },
                  {
                      label: 'Right',
                      icon: 'pi pi-fw pi-align-right'
                  },
                  {
                      label: 'Center',
                      icon: 'pi pi-fw pi-align-center'
                  },
                  {
                      label: 'Justify',
                      icon: 'pi pi-fw pi-align-justify'
                  }
              ]
          },
          {
              label: 'Users',
              icon: 'pi pi-fw pi-user',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-user-plus'
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-user-minus'
                  },
                  {
                      label: 'Search',
                      icon: 'pi pi-fw pi-users',
                      items: [
                          {
                              label: 'Filter',
                              icon: 'pi pi-fw pi-filter',
                              items: [
                                  {
                                      label: 'Print',
                                      icon: 'pi pi-fw pi-print'
                                  }
                              ]
                          },
                          {
                              icon: 'pi pi-fw pi-bars',
                              label: 'List'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Events',
              icon: 'pi pi-fw pi-calendar',
              items: [
                  {
                      label: 'Edit',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {
                              label: 'Save',
                              icon: 'pi pi-fw pi-calendar-plus'
                          },
                          {
                              label: 'Delete',
                              icon: 'pi pi-fw pi-calendar-minus'
                          }
                      ]
                  },
                  {
                      label: 'Archieve',
                      icon: 'pi pi-fw pi-calendar-times',
                      items: [
                          {
                              label: 'Remove',
                              icon: 'pi pi-fw pi-calendar-minus'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Quit',
              icon: 'pi pi-fw pi-power-off'
          }
      
        ];
    }

}
