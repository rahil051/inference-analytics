import { Module } from '@nestjs/common';
import { MacroController } from './macro.controller';
import { MacroService } from './macro.service';

@Module({
  controllers: [MacroController],
  providers: [MacroService]
})
export class MacroModule {}
