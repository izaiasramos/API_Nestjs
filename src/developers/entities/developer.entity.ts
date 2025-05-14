import { Column, PrimaryColumn } from 'typeorm';

export class Developer {
 
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: string;
}
