import { Injectable } from "@nestjs/common";


@Injectable()
export class AdminService {

    setTimeRemaining(idUser:string,idSession:string) :string {
        return 'ok';
    }
}