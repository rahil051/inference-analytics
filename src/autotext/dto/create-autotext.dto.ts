class Autotext_DTO {
    readonly user_id: string;
    readonly name: string;
    readonly html: string;
    readonly text: string;
}

export class CreateAutotext_DTO extends Autotext_DTO { }
export class UpdateAutotext_DTO extends Autotext_DTO { }