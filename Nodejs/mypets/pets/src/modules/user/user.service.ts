// import { Injectable, Controller, HttpException, HttpStatus, BadRequestException, Logger, UseFilters, Inject, forwardRef } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { UserEntity } from '../../entities/user/user.entity';
// import { Repository } from 'typeorm';
// // import { UserDTO } from './dto/user.dto';
// import { ApiTags, ApiOperation } from '@nestjs/swagger';
// import { ForbiddenException } from '../../shared/errors/ForbiddenException';
// import { HttpExceptionFilter } from '../../shared/filters/http-exception.filter';
// import { LoginDTO } from 'src/modules/auth/dto/auth.dto';
// import { toUserLoginDto } from '../../shared/mapper/user.mapper';
// import {AuthService} from '../auth/auth.service'
// import { CreateUserDto } from './dto/create.cat.dto';
// @Injectable()
// export class UserService {
//     constructor(
//         @InjectRepository(UserEntity)
//         private userRepository: Repository<UserEntity>,
//         @Inject(forwardRef(() => AuthService))
//         private authService: AuthService
//     ) {

//     }

//     @ApiOperation({ summary: "Get all user" })
//     async showAll(page: number = 1) :Promise<UserEntity[]>{
//         return await this.userRepository.find({
//             relations:['sessions'],
//             take:10,
//             skip:10 * (page-1)
//     });
//     }

//     async create(data:CreateUserDto){
//         const user = await this.userRepository.create(data);
//         //hash password
//         user.password = await this.authService.getHash(user.password);
//         await this.userRepository.save(user);
//         return user;
//     }

//     // async findUser(id:string):Promise<UserEntity> {
//     //     let user = null;
//     //     try{
//     //          user = await this.userRepository.findOne({where :{id}});
//     //     } catch(e) {
//     //         throw new HttpException({
//     //             status: HttpStatus.NOT_FOUND,
//     //             error: 'This is a custom message',
//     //           }, HttpStatus.NOT_FOUND);
//     //     }
       
//     //     return user;

//     // }

//     // @UseFilters(HttpExceptionFilter)
//     async update(id: string,data:Partial<CreateUserDto>) {
//         try{
//             await this.userRepository.update({id},data);
//             return await this.userRepository.findOne({id});
//         } catch(e) {
//             throw new HttpException({
//                 status: HttpStatus.BAD_REQUEST,
//                 error:'update database error'
//               }, HttpStatus.BAD_REQUEST);
//         }
       
//     }

//     async destroy(id:string) {
//         await this.userRepository.delete({id});
//         return { deleted: true};
//     }

//     async findByPayload(payload: any){
//         const { email } = payload;
//         return await this. userRepository.findOne({email})
//     }

//     async findByEmail(email: any): Promise<CreateUserDto> {
//         const user = await this.userRepository.findOne({where:{email:email}});
//         if(!user){
//             throw new HttpException('User not found',HttpStatus.NOT_FOUND);
//         }
//         return user;
//     }

//     async findById(id: string): Promise<CreateUserDto> {
//         const user = await this.userRepository.findOne({where:{id:id}});
//         if(!user){
//             throw new HttpException('User not found',HttpStatus.NOT_FOUND);
//         }
//         return user;
//     }


   

// }
