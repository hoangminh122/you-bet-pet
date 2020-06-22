import { Module, Session } from "@nestjs/common";
import { SessionController } from "./session.controller";
import { SessionService } from "./session.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SessionEntity } from "../../entities/session/session.entity";
import { UserEntity } from "../../entities/index.entity";

@Module({
    imports:[TypeOrmModule.forFeature([SessionEntity,UserEntity])],
    controllers:[SessionController],
    providers:[SessionService]
})

export class SessionModule{}