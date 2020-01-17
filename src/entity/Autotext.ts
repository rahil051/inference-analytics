import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Macro } from "./Macro";

@Entity('autotexts')
export class Autotext extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { nullable: false })
	user_id: string;

	@Index()
	@Column('varchar', { length: 255, nullable: false })
	name: string;

	@Column('text')
	html: string;

	@Column('text')
	text: string;

	@CreateDateColumn({ type: 'timestamptz' })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamptz' })
	updated_at: Date;

	// A User can have many autotexts
	// @ManyToOne((type) => User, user => user.autotexts)
	// user: User;

	// bi-directional relationship
	// owner side of relation
	@ManyToMany((type) => Macro, (macro) => macro.autotexts)
	@JoinTable()
	macros: Macro[];
}
