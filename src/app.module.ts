import { Module } from '@nestjs/common';
import { MedicinesModule } from './medicines/medicines.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MedicinesModule,
    TypeOrmModule.forRoot({ 
    type:'mysql',
    host:'localhost',
    port: 3307,
    username:'user_crud',
    password:'root',
    database:'db_crud',
    autoLoadEntities:true,
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, //Sincroniza las tablas con la base de datos
  }),
    UsersModule,
    AuthModule],
})
export class AppModule {}


