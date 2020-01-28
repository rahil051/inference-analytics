import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, Index} from "typeorm";

@Entity('reports')
export class Report extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { nullable: false })
    user_id: string;

    @Index({ unique: true })
    @Column('varchar', { length: 255, nullable: false })
    name: string;

    @Column({ type: 'timestamptz' })
    exam_date: Date;

    @Column('varchar', { length: 32 })
    procedure: string;
}
