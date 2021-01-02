
import { Sequelize } from 'sequelize-typescript';
import { SessionEntity } from '../../entities/session/session.entity';
import { UserEntity } from '../../entities/user/Users';
import { databaseConfig } from '../../shared/database';


export const databaseProvider = {
  provide: 'SequelizeInstance',
  useFactory: async () => {
    let config;
    switch (process.env.NODE_ENV) {
      case 'prod':
      case 'production':
        config = databaseConfig.production;
        break;
      case 'dev':
      case 'development':
        config = databaseConfig.development;
        break;
      default:
        config = databaseConfig.development;
    }

    const sequelize = new Sequelize({...config });
    sequelize.addModels([UserEntity,SessionEntity]);
    await sequelize.sync({ force: false });
    return sequelize;
  },
};
