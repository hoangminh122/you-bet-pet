// import { Controller, Get, Post, Put,
//          Delete, Body, Param, ForbiddenException,
//          UseFilters, ParseIntPipe, HttpStatus, 
//          UsePipes, Logger, ValidationPipe, Query, 
//          UseInterceptors, UploadedFile, Res, UploadedFiles, UseGuards } from '@nestjs/common';
// import { UserService } from './user.service';
// // import { UserDTO } from './dto/user.dto';
// import { ApiBody,ApiResponse,ApiTags, ApiBearerAuth} from '@nestjs/swagger';
// import { UserEntity } from '../../entities/index.entity';
// import { HttpExceptionFilter } from '../../shared/filters/http-exception.filter';
// import { get } from 'http';
// import { JoiValidationPipe } from '../../shared/pipes/JoiValidationPipe';
// import Joi from '@hapi/joi';
// import { CreateUserDto } from './dto/create.cat.dto';
// import {FileInterceptor, FilesInterceptor, FileFieldsInterceptor} from '@nestjs/platform-express/multer'
// import { LoggingInterceptor } from '../../shared/interceptor/logging.interceptor';
// import { TransformInterceptor } from '../../shared/interceptor/transform.interceptor';
// import { ExcludeNullInterceptor } from '../../shared/interceptor/exclude-null.interceptor';
// import { CacheInterceptor } from '../../shared/interceptor/cache.interceptor';
// import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
// // import { AuthGuards } from '../auth/jwt/local-auth.guard';

// @ApiTags('user')
// // @UseFilters(HttpExceptionFilter)
// @Controller('user')
// export class UserController {
//     constructor(private userService :UserService){
        
//     }

//     // @UseInterceptors(LoggingInterceptor)
//     // @UseInterceptors(TransformInterceptor)
//     // @UseInterceptors(ExcludeNullInterceptor)
//     @UseInterceptors(CacheInterceptor)
//     @Get('test/:id')
//     async testPipe(@Param('id', new ParseIntPipe()) id :number) {
//         return typeof(id);
//         // return null;
//     }

//     @Get('/:email')
//     @ApiBearerAuth()
//     @UseGuards(JwtAuthGuard)
//     // @UseGuards(new AuthGuards())
//     // @UseFilters(new HttpExceptionFilter())
//     // @UseFilters(HttpExceptionFilter)
//     async showUserByEmail(@Param('email') email: string){
//         return await this.userService.findByEmail(email);
//     }

//     @Get()
//     @ApiBearerAuth()
//     @UseGuards(JwtAuthGuard)
//     // @UseGuards(new AuthGuards())
//     // @UseFilters(new HttpExceptionFilter())
//     // @UseFilters(HttpExceptionFilter)
//     showAllUser(@Query('page') page: number){
//         // throw new ForbiddenException();
//         return this.userService.showAll(page);
//     }

//     @Post()
//     // @UsePipes(new JoiValidationPipe(Joi.object().keys({username: Joi.string().required()})))  ///wrong
//     @ApiResponse({ status: 200, description: 'Create new user success !.'})
//     @ApiBody({ type: [UserEntity] })
//     createUser(@Body() data: CreateUserDto){
//         return this.userService.create(data);
//     }

//     // @Get(':id')
//     // readUserById(@Param('id') id: string){
//     //     return this.userService.findUser(id);
//     // }

//     @Put(':id')
//     @ApiBearerAuth()
//     @UseGuards(JwtAuthGuard)
//     // @ApiBody({ type: [UserEntity] })
//     updateUser(@Param('id') id:string,@Body() data :CreateUserDto){
//         return this.userService.update(id,data);
//     }

//     @Delete(':id')
//     destroyUser(@Param('id') id: string){
//         return this.userService.destroy(id);
//     }
    
//     @Post('upload')
//     @ApiBearerAuth()
//     @UseGuards(JwtAuthGuard)
//     // @UseInterceptors(
//     //     FileFieldsInterceptor(
//     //       [
//     //         { name: 'pdf', maxCount: 1 },
//     //         { name: 'thumbnail', maxCount: 1 },
//     //         { name: 'sample', maxCount: 1 },
//     //         { name: 'image', maxCount: 1 },
//     //       ],
//     //       { dest: 'uploads' },
//     //     ),
//     //   )
//     @UseInterceptors(FilesInterceptor('image'))
//     uploadFile(@UploadedFiles() file) {
//         console.log(file)
//     }
//     @Get(':imgpath')
//     seeUploadFile(@Param('imgpath') image, @Res() res) {
//         return res.sendFile(image,{root:'uploads'})
//     }
// }
