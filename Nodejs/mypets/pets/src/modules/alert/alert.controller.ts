// import { Controller, Body, Post, HttpCode } from "@nestjs/common";
// import { AlertGateway } from "./alert.gateway";
// import { ApiTags } from "@nestjs/swagger";

// @Controller('alert')
// @ApiTags('alert')
// export class AlertController {

//     constructor(private alertGateway:AlertGateway){}

//     @Post()
//     sendAlertToAll(@Body() dto:{message:string}) {
//         this. alertGateway.sendToAll("okokokokok");
//         return dto;
//     }
// }