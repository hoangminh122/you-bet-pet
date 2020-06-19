import { Controller, Get, Post, Put, Delete, Body, Param, ForbiddenException, UseFilters, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { ApiBody,ApiResponse,ApiTags} from '@nestjs/swagger';
import { UserEntity } from '../entities/index.entity';
import { HttpExceptionFilter } from '../shared/http-exception.filter';
import { get } from 'http';

@ApiTags('user')
// @UseFilters(HttpExceptionFilter)
@Controller('user')
export class UserController {
    constructor(private userService :UserService){
        
    }

    @Get('test/:id')
    async testPipe(@Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id :number) {
        return typeof(id);
    }


    @Get()
    // @UseFilters(new HttpExceptionFilter())
    // @UseFilters(HttpExceptionFilter)
    showAllUser(){
        // throw new ForbiddenException();
        return this.userService.showAll();
    }

    @Post()
    @ApiResponse({ status: 200, description: 'Create new user success !.'})
    @ApiBody({ type: [UserEntity] })
    createUser(@Body() data: UserDTO){
        return this.userService.create(data);
    }

    @Get(':id')
    readUserById(@Param('id') id: string){
        return this.userService.findUser(id);
    }

    @Put(':id')
    @ApiBody({ type: [UserEntity] })
    updateUser(@Param('id') id:string,@Body() data :UserDTO){
        return this.userService.update(id,data);
    }

    @Delete(':id')
    destroyUser(@Param('id') id: string){
        return this.userService.destroy(id);
    }
    
    

}
