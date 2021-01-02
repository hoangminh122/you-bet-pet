// import { OnGatewayInit, WebSocketServer, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
// import { Logger } from "@nestjs/common";
// import { Socket,Server} from "socket.io";

// @WebSocketGateway({namespace:'/chat'})
// export class ChatGateway implements OnGatewayInit {

//     @WebSocketServer() wss: Server

//     afterInit(server: any) {
//         this.logger.log('Initialized!');

//     }

//     private logger: Logger = new Logger('ChatGateway')

//     @SubscribeMessage('chatToServer')
//     handleMessage(client: Socket,message:{sender:string,message:string}) {
//         this.wss.emit('chatToClient',message);
//     }


// }