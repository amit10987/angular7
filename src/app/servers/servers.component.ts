import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

   allowNewServer: boolean = false;
   serverCreationStatus: string = "No Server was created!";
   serverName: string = "test";

  constructor() { 
    setTimeout(() => {this.allowNewServer = true}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
  	this.serverCreationStatus = "server was created! and name is " + this.serverName;
  }

  onUpdateServerName(event: Event){
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

}
