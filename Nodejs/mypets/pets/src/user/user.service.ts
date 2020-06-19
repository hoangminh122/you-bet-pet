import { Injectable, Controller, HttpException, HttpStatus, BadRequestException, Logger, UseFilters } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ForbiddenException } from '../shared/ForbiddenException';
import { HttpExceptionFilter } from '../shared/http-exception.filter';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {

    }

    @ApiOperation({ summary: "Get all user" })
    async showAll() :Promise<UserEntity[]>{
        return await this.userRepository.find({relations:['sessions']});
    }

    async create(data:UserDTO){
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user;
    }

    async findUser(id:string):Promise<UserEntity> {
        let user = null;
        try{
             user = await this.userRepository.findOne({where :{id}});
        } catch(e) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'This is a custom message',
              }, HttpStatus.NOT_FOUND);
        }
       
        return user;

    }

    // @UseFilters(HttpExceptionFilter)
    async update(id: string,data:Partial<UserDTO>) {
        try{
            await this.userRepository.update({id},data);
            return await this.userRepository.findOne({id});
        } catch(e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error:'update database error'
              }, HttpStatus.BAD_REQUEST);
        }
       
    }

    async destroy(id:string) {
        await this.userRepository.delete({id});
        return { deleted: true};
    }

    async findByPayload(payload: any){
        const { username } = payload;
        return await this. userRepository.findOne({username})
    }

}
