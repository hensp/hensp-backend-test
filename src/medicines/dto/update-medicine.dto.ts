
import { IsOptional, IsString,IsPositive, MinLength, IsInt } from 'class-validator';

export class UpdateMedicineDto  {
    
    @IsOptional()    
    @IsString()
    @MinLength(3)
    name?: string;

    @IsOptional()    
    @IsString()
    supplier?:string;
    
    @IsOptional()
    @IsInt()
    @IsPositive()
    price?:number;  
    
    @IsOptional()
    @IsInt()
    @IsPositive()
    salesPrice?:number;
    

    
}
