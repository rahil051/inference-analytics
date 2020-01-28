import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

export enum ReviewType {
  AUTO_IMPRESSION = "auto_impression",
  PROTOCOL_GENERATOR = "protocol_generator",
  REPORT_LABEL_GENERATOR = "report_label_generator"
}

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  uuid: string;

  @Column("varchar", { length: 32 })
  assigned_to: string;

  @Column({
    type: "enum",
    enum: ReviewType,
    default: ReviewType.AUTO_IMPRESSION
  })
  review_type: ReviewType;

  @Column("int", { width: 2 })
  row_type: number;

  @Column("varchar")
  file_id: string;

  @Column("text")
  human_summary: string;

  @Column("text")
  machine_summary: string;

  @Column("text")
  text: string;

  @Column("boolean", { default: false })
  is_ct_scan: boolean;

  @Column("boolean", { default: false })
  is_reviewed: boolean;

  @CreateDateColumn({ type: "timestamptz" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updated_at: Date;
}
