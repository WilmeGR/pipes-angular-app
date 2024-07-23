import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {



  public isUpperCase:boolean = false;
  
  
  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }
  
  
  public hero : Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color : Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red

    },
    {
    name: 'Robin',
    canFly: false,
    color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color : Color.green
    }

  ]

  public orderBy?: keyof Hero;



  public changeOrder(value: keyof Hero){

    console.log({value})
    this.orderBy = value;

  }

  // items: MenuItem[] | undefined;

  //   ngOnInit() {
  //       this.items = [
  //           {
  //               label: 'Update',
  //               icon: 'pi pi-refresh'
  //           },
  //           {
  //               label: 'Delete',
  //               icon: 'pi pi-times'
  //           }
  //       ];
  //   }
    
}
