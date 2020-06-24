import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SessionDTO } from "./dto/session.dto";
import { SessionEntity } from "../../entities/session/session.entity";
import { UserEntity } from "../../entities/index.entity";

@Injectable()
export class SessionService {
    constructor(
        @InjectRepository(SessionEntity)
        private sessionRepository: Repository<SessionEntity>,
        @InjectRepository(UserEntity)
        private UserRepository: Repository<UserEntity>
    ){

    }

    async showAll(){
        return await this.sessionRepository.find({relations:['user']});
    }

    async create(data :SessionDTO){
        console.log(data)
        const session = await this.sessionRepository.create(data);
        await this.sessionRepository.save(session);
        return session;
    }

    async update(id:string,data:Partial<SessionDTO>){
        await this.sessionRepository.update({id},data);
        return await this.sessionRepository.findOne({where:{id}});
    }
    
    async destroy(id:string){
        await this.sessionRepository.delete({id})
        return {deleted:true}
    }
}