import { Module } from '@nestjs/common';
import { EdificiosService } from './services/edificios.service';
import { EdificiosController } from './controllers/edificios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EdificioEntity } from './entities/edificio.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EdificioEntity])
  ],
  controllers: [EdificiosController],
  providers: [EdificiosService]
})
export class EdificiosModule { }
