import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  firstname: string;

  @Column({ length: 500 })
  lastname: string;

  @Column({ length: 500, unique: true })
  email: string;

  @Column({ length: 500 })
  password: string;

  // this expires daily at 7:30 am so user needs to login every day

  @Column({ length: 500 })
  kiteaccesstoken?: string;
}
