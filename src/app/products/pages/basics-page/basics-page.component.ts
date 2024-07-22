import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {


  public nameLower: string = 'wilme';
  public nameUpper: string = 'WILME';
  public fullName: string = 'wIlMe gOnzalEZ';

  public customDate: Date = new Date;
  
}
