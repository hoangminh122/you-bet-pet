import { LoginDTO } from "src/modules/auth/dto/auth.dto";
import { UserEntity } from "src/entities/index.entity";

export const toUserLoginDto = (data: UserEntity): LoginDTO => {
    const {email,password} =data;
    let userDto: LoginDTO = {email,password};
    return userDto;
}