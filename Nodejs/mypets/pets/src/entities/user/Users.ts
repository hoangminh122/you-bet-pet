import { ApiProperty } from '@nestjs/swagger';
import { UUIDV4 } from 'sequelize';
import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  Default,
  Sequelize,
  PrimaryKey,
  IsUUID,
  BelongsTo,
} from 'sequelize-typescript';


@Table({ tableName: 'users', timestamps: false })
export class UserEntity extends Model<UserEntity> {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: Sequelize.literal('uuid_generate_v4()'),
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  code: boolean;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  username: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  password: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  email:string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  avatar:string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  phone:string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  address:string;

}