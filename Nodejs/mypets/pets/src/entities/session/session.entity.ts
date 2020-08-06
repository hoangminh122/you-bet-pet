import { Entity, Column, ManyToOne, IsNull } from "typeorm";
import {BaseEntity} from '../base.entity'
import {UserEntity} from '../user/user.entity'

@Entity({name:'session'})
export class SessionEntity  extends BaseEntity{
    @Column({type:'varchar',length:100,name:'name_session'})
    nameSession:string;

    @Column({type:'int',name:'money_win'})
    moneyWin   : number;

    @Column({type:'varchar',length:100,name:'user_win'})
    userWin    :string;

    @Column({type:'varchar',length:100,name:'state_session',nullable:true})
    state    :string;

    @Column({type:'int',name:'long_time'})
    longTime   :string;

    @Column({type:'varchar',length:100,name:'time_start'})
    timeStart  :string;

    @Column({type:'varchar',nullable:false})
    userId  :string;

    @ManyToOne(type => UserEntity, user => user.sessions)
    user:UserEntity
}