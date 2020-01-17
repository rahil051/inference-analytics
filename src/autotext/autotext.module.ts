import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autotext } from '../entity/Autotext';
import { AutotextService } from './autotext.service';
import { AutotextController } from './autotext.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Autotext])],
    providers: [AutotextService],
    controllers: [AutotextController],
})
export class AutotextModule {}
