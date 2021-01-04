import { Inject, Injectable } from "@nestjs/common";
import { SessionDTO } from "./dto/session.dto";
import { SessionEntity } from "../../entities/session/session.entity";
import { UserEntity } from "../../entities/index.entity";

@Injectable()
export class SessionService {
    constructor(
        @Inject('SESSION_REPOSITORY') 
        private sessionRepository :typeof SessionEntity
   
    ){}

    async showAll(){
        return await this.sessionRepository.findAll();
    }

    async getSession(id:string){
        const applicantInfo = await this.sessionRepository.findOne({
            where: { id },
          });
        return applicantInfo;
    }

    async create(data :SessionDTO){
        console.log(data)
        const session = await this.sessionRepository.create(data);
        return session;
    }

    async update(id:string,data){
        await this.sessionRepository.update({id},data);
        return await this.sessionRepository.findOne({where:{id}});
    }
    
    async destroy(id:string){
        await this.sessionRepository.destroy({where:{id}});
        return {deleted:true}
    }
}