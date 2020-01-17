// core
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";

// configurations
import { getDBConfigurations } from "./app.config";

// modules
import { AutotextModule } from "./autotext/autotext.module";
import { UserModule } from "./user/user.module";
import { MacroModule } from "./macro/macro.module";

// controllers
import { AppController } from "./app.controller";

// providers
import { AppService } from "./app.service";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // when no configurations provided, it will be loaded from ./ormconfig.json
    TypeOrmModule.forRoot(getDBConfigurations()),

    // API modules
    UserModule,
    AutotextModule,
    MacroModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
