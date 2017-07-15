"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MessagesComponent = (function () {
    function MessagesComponent() {
        //Taking dummy data
        this.messages = [
            {
                text: 'Text1',
                owner: 'Tim'
            },
            {
                text: 'Text2',
                owner: 'Paul'
            }
        ];
    }
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'messages',
            template: "\n    <div *ngFor=\"let message of messages\">\n      <md-card class=\"card-spacing\">\n        <md-card-title>\n            {{message.owner}}\n        </md-card-title>\n        <md-card-content>\n              {{message.text}} \n        </md-card-content>\n     </md-card>\n    </div>  \n   "
        })
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages-components.js.map