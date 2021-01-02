import {UserEntity} from '../user/Users'
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


@Table({ tableName: 'sessions', timestamps: false })
export class SessionEntity  extends Model<SessionEntity>{
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
    nameSession:string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    moneyWin   : number;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    userWin    :string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    state    :string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    longTime   :string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    timeStart  :string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    userOwnId  :string;

}