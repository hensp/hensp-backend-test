import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medicine {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  name: string;

  @Column('int', { default: 0 })
  stock: number;

  @BeforeInsert()
  checkNameInsert() {
    this.name = this.name.toLocaleLowerCase();
  }
}
