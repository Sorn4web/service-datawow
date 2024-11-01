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
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
