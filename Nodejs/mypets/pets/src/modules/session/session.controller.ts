import { Controller, Get, Body, Post, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { SessionDTO } from './dto/session.dto';
import { SessionService } from './session.service';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';


@ApiTags('session')
@Controller('session')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
export class SessionController {
    constructor(private sessionService: SessionService){

    }

    @Get()
    showAllUser(){
        return this.sessionService.showAll();
    }

    @Get('/:id')
    @ApiOperation({summary:"Api Get Infor Session by Id"})
    async getSession(@Param('id') id: string){
        return this.sessionService.getSession(id);
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
