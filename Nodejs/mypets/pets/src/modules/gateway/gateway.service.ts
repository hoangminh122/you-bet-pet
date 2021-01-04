// import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WsResponse, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets'
// import { Logger } from '@nestjs/common';
// import { Socket,Server } from 'socket.io';

// // @WebSocketGateway(3008,{path:'/'})
// @WebSocketGateway()
// export class AppGateway implements OnGatewayInit,OnGatewayConnection,OnGatewayDisconnect {
    
//     @WebSocketServer() wss:Server;

//     handleDisconnect(client: any) {
//         this.logger.log(`Client Disconnected: ${client.id}`)
//     }
//     handleConnection(client: any, ...args: any[]) {
//         this.logger.log(`Client Connected: ${client.id}`)
//     }

//     private logger: Logger = new Logger('AppGateway');

//     afterInit(server: any) {
//         this.logger.log('Initialized');
//     }

//     @SubscribeMessage('msgToServer')
//     hanndleMessage(client: Socket, text: string):void {
//         console.log("text",text)
//         this.wss.emit('msgToClient',text);
//         // return 'Hello world !';
//         // client.emit('msgToClient',text);
//         // return {event:'msgToClient',data:text};
//     }
// }