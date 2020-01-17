import { User } from "./entity/User";
import { Autotext } from "./entity/Autotext";
import { Macro } from "./entity/Macro";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getDBConfigurations = (): TypeOrmModuleOptions => {
    const config: TypeOrmModuleOptions = {
		type: 'postgres',
		host: 'freedbinstance.clg06jmlkfyq.us-east-2.rds.amazonaws.com',
		port: 5432,
		username: 'munawarkhanaws6656',
		password: 'mkaws6656pass',
		database: 'infanalytics_test',
		entities: [
			User,
			Autotext,
			Macro
		],
		synchronize: false,
		logging: true
	  }
    return config;
}