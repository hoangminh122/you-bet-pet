import { Module, Session } from "@nestjs/common";
import { SessionController } from "./session.controller";
import { SessionService } from "./session.service";
import { SessionEntity } from "../../entities/session/session.entity";
import { UserEntity } from "../../entities/index.entity";

@Module({
    imports:[],
    controllers:[SessionController],
    providers:[
        SessionService,
        {
            provide:'SESSION_REPOSITORY',
            useValue:SessionEntity
        }
    ]
})

export class SessionModule{}