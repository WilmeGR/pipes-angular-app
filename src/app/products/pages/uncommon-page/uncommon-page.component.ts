import { Component, OnDestroy } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {



  //i18n Select
  public name: string = 'Wilme';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male : 'invitarlo',
    female: 'invitarla'
  };


  changeClient():string{

    if(this.name==='Ana') return this.name ='Wilme',this.gender='male';
    
    return this.name = 'Ana',this.gender = 'female';
  }


  //i18n Plugal

  public clients: string[] = ['Wilme','Adelso', 'Jose', 'Maria', 'Ana', 'Juan', 'Pedro'];
  public clientMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift()
  }


  //Key Value pipe

  public person = {
    name : 'Wilme',
    apellido : 'Gonzalez',
    edad: 26,
    address : 'Santiago, RD',
    vivo: true
  }


  //Async Pipe
  public myObservablePipe = interval(1000).pipe(
    tap ((value) => console.log('tap:', value))
  )


  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }


}
