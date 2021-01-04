// import { Controller, Post, Get, Body, UseGuards } from "@nestjs/common";
// import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
// import { AdminService } from "./admin.service";
// import { AdminSetTimeRemaining } from "./dto/admin-setTime.dto";
// import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard";


// @ApiTags('admin')
// @Controller('admin')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
// export class AdminController {
//     constructor(
//         private adminService:AdminService
//     ){

//     }

//     @Post('setTimeRemaining')
//     setTimeRemaining(@Body() req:AdminSetTimeRemaining) :string {
//         const result = this.adminService.setTimeRemaining("1","1");
//         return result;
//     }

//     @Get()
//     setTimeRemaining2(){
//         return "asdasd";
//     }

// }