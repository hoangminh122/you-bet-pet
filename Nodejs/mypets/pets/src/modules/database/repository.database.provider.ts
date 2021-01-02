import { SessionEntity, UserEntity } from "src/entities/index.entity"


export const memberRepository = {
    provide: 'SessionsRepository',
    useValue:SessionEntity
}

export const groupRepository = {
    provide: 'UsersRepository',
    useValue:UserEntity
}