import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { MacroService } from './macro.service';

@Controller('api/macro')
export class MacroController {

		constructor(private readonly macroService: MacroService) {}

		@Get()
		findAllByAutotext() {

		}

		@Post()
		create() {

		}

		@Put()
		update() {

		}

		@Delete()
		delete() {

		}

}