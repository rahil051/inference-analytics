import { ObjectLiteral } from "typeorm";

export class QueryHelperService {

    static generateWhereClause(columns: ObjectLiteral) {
        const where: ObjectLiteral = {};
        return where;
    }

}