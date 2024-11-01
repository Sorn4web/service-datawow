import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('master_community')
export class MasterCommunity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  lastUpdate: Date;

  @DeleteDateColumn()
  deleteDate: Date;
}
