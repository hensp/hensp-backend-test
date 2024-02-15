import{
    Column,
    DeleteDateColumn,
    Entity
} from "typeorm";
@Entity()
export class Medicine {
    @Column({primary:true,generated:true})
    id : number;

    @Column()
    name : string;
    
    @Column()
    supplier:string;
    
    @Column()
    price:number;  
    
    @Column()
    salesPrice:number;
    
    @DeleteDateColumn()
    deleteAt:Date;

    
}
