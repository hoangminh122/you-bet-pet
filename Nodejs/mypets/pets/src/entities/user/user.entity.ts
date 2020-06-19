import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { SessionEntity } from '../session/session.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {

  @ApiProperty()
  @Column({ type: 'varchar', length: 100 })
  username: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 300 })
  password: string;

  @ApiProperty()
  @Column({type:'varchar',length:100})
  email:string;

  @ApiProperty()
  @Column({type:"varchar",length:100})
  avatar:string;

  @ApiProperty()
  @Column({type:'int'})
  phone:string;

  @ApiProperty()
  @Column({type:'varchar',length:50})
  address:string;

  @OneToMany(type => SessionEntity,session =>session.user)
  sessions: SessionEntity[];
}