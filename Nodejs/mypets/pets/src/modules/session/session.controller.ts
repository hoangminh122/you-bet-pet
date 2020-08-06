import { Controller, Get, Body, Post, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { SessionDTO } from './dto/session.dto';
import { SessionService } from './session.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';


@ApiTags('session')
@Controller('session')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class SessionController {
    constructor(private sessionService: SessionService){

    }

    @Get()
    showAllUser(){
        return this.sessionService.showAll();
    }

    @Post()
    createSession(@Body() data: SessionDTO){
        return this.sessionService.create(data);
    }
    
    @Put('id')
    readSessionById(@Param('id') id:string,@Body() data:SessionDTO){
        return this.sessionService.update(id,data);
    }

    @Delete(':id')
    destroySession(@Param('id') id: string){
        return this.sessionService.destroy(id);
    }

    @Get('/date-now')
    getDateNow(){
        console.log(new Date().toLocaleString().slice(11,22))
    }
}
