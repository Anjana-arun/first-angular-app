import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  username: string = "";
  emptystring = false;
 
  onUpdateUserName( event : any ){
  
    if(this.username != "")
       this.emptystring = true;
  }


  resetUserName(){

          this.username=""; 
          this.emptystring = false;     
  }
}
