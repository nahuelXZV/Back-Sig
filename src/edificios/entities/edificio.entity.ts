import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../common/entities/base.entity";
import { IEdificio } from "../interfaces/edificio.interface";

@Entity({ name: 'edificios' })
export class EdificioEntity extends BaseEntity implements IEdificio {

    @Column()
    fid: number;

    @Column()
    descripcion: string;

    @Column({ nullable: true })
    codEdif?: number;

    @Column({ type: 'decimal' })
    latitud: string;

    @Column({ type: 'decimal' })
    longitud: string;

    @Column()
    grupo: string;

    @Column()
    sigla: string;

    @Column()
    localidad: string;
}
