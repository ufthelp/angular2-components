
import {Component} from '@angular/core'

@Component({
    selector:'messages',
    template:`
    <div *ngFor="let message of messages">
      <md-card class="card-spacing">
        <md-card-title>
            {{message.owner}}
        </md-card-title>
        <md-card-content>
              {{message.text}} 
        </md-card-content>
     </md-card>
    </div>  
   `
})

export class MessagesComponent {
    //Taking dummy data
    messages = [
        {
            text : 'Text1',
            owner : 'Tim'
        },
        {
            text : 'Text2',
            owner : 'Paul'
        }
    ]
 }



