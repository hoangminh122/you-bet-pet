// import { WebSocketServer, WebSocketGateway } from "@nestjs/websockets";
// import { Server } from "socket.io";

// @WebSocketGateway({namespace:'/alerts'})
// export class AlertGateway {
//     @WebSocketServer() wss:Server;


//     sendToAll(msg: string){
//         this.wss.emit('alertToClient',{type:'Alert',message:msg})
//     }
// }