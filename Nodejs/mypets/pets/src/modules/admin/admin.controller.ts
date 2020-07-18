import { Controller, Post, Get, Body } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AdminService } from "./admin.service";
import { AdminSetTimeRemaining } from "./dto/admin-setTime.dto";


@ApiTags('admin')
@Controller('admin')
export class AdminController {
    constructor(
        private adminService:AdminService
    ){

    }

    @Post('setTimeRemaining')
    setTimeRemaining(@Body() req:AdminSetTimeRemaining) :string {
        const result = this.adminService.setTimeRemaining("1","1");
        return result;
    }

    @Get()
    setTimeRemaining2(){
        return "asdasd";
    }

}