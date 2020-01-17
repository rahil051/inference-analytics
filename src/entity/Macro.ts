import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn, ManyToMany } from "typeorm";
import { Autotext } from "./Autotext";

@Entity('macros')
export class Macro extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Index({ unique: true })
	@Column({ nullable: false })
	uuid: string;

	@Column({ nullable: false })
	name: string;

	@Column('text')
	text: string;

	@Column()
	type: string;

	@Column()
	hyponym: string;

	@Column()
	default: string;

	@CreateDateColumn({ type: 'timestamptz' })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamptz' })
	updated_at: Date;

	// bi-directional relationship
	@ManyToMany((type) => Autotext, (autotext) => autotext.macros)
	autotexts: Autotext[];
}
