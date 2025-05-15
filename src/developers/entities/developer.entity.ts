import { BeforeInsert, Column, PrimaryColumn, Entity } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { nanoid } from 'nanoid';

@Entity('developers') // vai criar uma tabela chamada developers
export class Developer {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: string;

  @BeforeInsert() // antes de inserir o desenvolvedor, ele vai gerar um id
  generateId() {
    this.id = `dev_${nanoid()}`;
  }
}
