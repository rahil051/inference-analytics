import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Autotext } from "../entity/Autotext";
import { Repository, FindManyOptions, Raw } from "typeorm";
import { GetAutotextQueryParams } from "./autotext.interface";

@Injectable()
export class AutotextService {
  constructor(
    @InjectRepository(Autotext)
    private readonly autotextRepository: Repository<Autotext>
  ) {}

  findAll(values: GetAutotextQueryParams): Promise<Autotext[]> {
    const options: FindManyOptions = {
      select: ["id", "user_id", "name", "html", "text", "created_at"],
      where: {},
      order: { created_at: "DESC" },
      skip: values.offset,
      take: values.limit
    };

    if (values.userId) {
      options.where["user_id"] = values.userId;
    }

    if (values.searchKeyword && values.searchKeyword != "") {
      options.where["name"] = Raw(
        alias => `${alias} ILIKE '%${values.searchKeyword}%'`
      );
    }

    return this.autotextRepository.find(options);
  }

  findOne(id: number): Promise<Autotext> {
    return this.autotextRepository.findOne(id);
  }

  create(payload: Autotext): Promise<Autotext> {
    if (!payload.user_id) {
      throw new HttpException("User ID not provided", HttpStatus.BAD_REQUEST);
    }
    return this.autotextRepository.save(payload);
  }

  async update(id: number, payload: Autotext): Promise<Autotext> {
    const doesExist = !!(await this.autotextRepository.count({
      where: { id }
    }));
    if (!doesExist) {
      throw new HttpException("Autotext does not exists", HttpStatus.NOT_FOUND);
    } else {
      if (!payload.user_id) {
        throw new HttpException("User ID not provided", HttpStatus.BAD_REQUEST);
      }

      const autotext = new Autotext();
      Object.keys(payload).forEach(column => {
        if (column != undefined) {
          autotext[column] = payload[column];
        }
      });
      return Promise.resolve(new Autotext());
      // return this.autotextRepository.update(id, autotext);
    }
  }

  delete(id: number): Promise<Autotext> {
    const autotext = new Autotext();
    autotext.id = id;
    return this.autotextRepository.remove(autotext);
  }
}
