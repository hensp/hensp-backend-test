import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsPositive, IsString, MinLength } from "class-validator";
export class CreateMedicineDto {

    @ApiProperty()
    @IsString()
    @MinLength(3)
    name : string;
    
    @ApiProperty()
    @IsString()
    supplier:string;
    
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    price:number;  
    
    @ApiProperty()
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    salesPrice:number;
    
    
       
}


