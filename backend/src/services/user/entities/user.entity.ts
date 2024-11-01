import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  username: string;

  @Column({ type: 'text', nullable: false })
  full_name: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  lastUpdate: Date;

  @DeleteDateColumn()
  deleteDate: Date;
}
