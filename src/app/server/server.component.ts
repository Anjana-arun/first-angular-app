import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@NgModule({
    
    imports: [
    
      FormsModule
    ]    
  })

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})




export class ServerComponent {
    serverStatus: string = 'offline';
    serverId: number  = 10;
    allowNewServer  = false;
    serverCreationStatus = 'no server was created';
    serverName: string ='TestServer';

    constructor(){
        setTimeout(()=>{
            this.allowNewServer = true;
        },2000);
    }
    getServerStatus(){
        return this.serverCreationStatus;

    }
   
    onCreateServer() {
        this.serverCreationStatus = "Server was created!";
    }

    OnUpdateServerName(event: any){
     this.serverName  =  (<HTMLInputElement>event.target).value;
        console.log(event);
    }
}