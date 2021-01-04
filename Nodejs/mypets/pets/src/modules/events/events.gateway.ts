// import { 
//     OnGatewayConnection,
//     WebSocketServer, 
//     OnGatewayDisconnect, 
//     WebSocketGateway,
//     SubscribeMessage,
//     OnGatewayInit
// } from "@nestjs/websockets";
// import { Logger} from '@nestjs/common';
// import { Server,Socket } from 'socket.io';
// import { EventEnum } from "../../shared/enum/event.enum";

// @WebSocketGateway()
// export class EventsGateway implements OnGatewayConnection,OnGatewayInit,OnGatewayDisconnect {
//     afterInit(server: any) {
//         this.logger.log('Initialized');
//     }
//     private clients: Map<string, any> = new Map();
    

//     @WebSocketServer() server: Server;
//     private logger = new Logger();

//     public async handleConnection(client) {
//         this.logger.log(
//             `Client connected => ${client.id}  ${client.handshake.query.token}`,
//         );
//         try {
//             this.logger.log("Running")
//         } catch(err) {
//             this.logger.log("Error",err)
//         }
//         return null;
//     }

//     public handleDisconnect(client: any) {
//         this.logger.log(`Client disconnected => ${client.id}`);
//         client.disconnect();
//         this.clients.delete(client.id);
//      }
    
//      @SubscribeMessage('msgToServer')
//     public sendAllUser<T>(client: Socket,typeAction:EventEnum,data:T){
//         // console.log("event send")
//         this.server.emit(typeAction,data);
//     }
//     public sendMsgForUser<T>(clientId: string, typeAction:EventEnum, data: T) {
//         const client = this.clients.get(clientId);
//         if(client){
//             client.emit(typeAction,data);
//         }
//      }
    


// }