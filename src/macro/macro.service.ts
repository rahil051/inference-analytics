import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Macro } from "../entity/Macro";
import { Repository } from "typeorm";

@Injectable()
export class MacroService {
  constructor() {}

	findAllByAutotext(autotextId: number) { }
}
