import {
  Controller,
  Get,
  Query,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  NotFoundException
} from "@nestjs/common";
import { GetAutotextQueryParams } from "./autotext.interface";
import { AutotextService } from "./autotext.service";
import { CreateAutotext_DTO } from "./dto";
import { Autotext } from "../entity/Autotext";
import { UpdateAutotext_DTO } from "./dto/create-autotext.dto";
import { AuthGuard } from "@nestjs/passport";
import { Passport } from "../auth/auth.constants";

@UseGuards(AuthGuard(Passport.JWT))
@Controller("api/autotext")
export class AutotextController {
  constructor(private readonly autotextService: AutotextService) {}

  @Get()
  async findAll(@Query() query: GetAutotextQueryParams): Promise<Autotext[]> {
		const autotexts = await this.autotextService.findAll(query);
		if (autotexts.length < 1) {
      throw new NotFoundException("autotexts not found");
		}
		return autotexts;
  }

  @Get("user/:userId")
  async findAllByUser(
    @Param() _params,
    @Query() query: GetAutotextQueryParams
  ): Promise<Autotext[]> {
    query.userId = _params.userId;
		const autotexts = await this.autotextService.findAll(query);
		if (autotexts.length < 1) {
			throw new NotFoundException("autotexts not found");
		}
		return autotexts;
  }

  @Get(":id")
  findById(@Param() { id }): Promise<Autotext> {
		return this.autotextService.findOne(id);
  }

  @Post()
  create(@Body() createAutotextDto: CreateAutotext_DTO): Promise<Autotext> {
    const autotext: Autotext = new Autotext();
		autotext.user_id = createAutotextDto.user_id;
		autotext.name = createAutotextDto.name;
		autotext.html = createAutotextDto.html;
		autotext.text = createAutotextDto.text;
    return this.autotextService.create(autotext);
  }

  @Put(':id')
  Update(@Param() { id }, @Body() updateAutotextDto: UpdateAutotext_DTO): Promise<Autotext> {
		const autotext: Autotext = new Autotext();
		autotext.id = id;
		autotext.user_id = updateAutotextDto.user_id;
		autotext.name = updateAutotextDto.name;
		autotext.html = updateAutotextDto.html;
		autotext.text = updateAutotextDto.text;
		return this.autotextService.update(id, autotext);
	}

  @Delete(':id')
  Delete(@Param() { id }) {
		return this.autotextService.delete(id);
	}
}
