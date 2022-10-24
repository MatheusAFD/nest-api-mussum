import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: String;

  @Column()
  key: string;
}
