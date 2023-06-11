import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateEdificioDto } from '../dto/create-edificio.dto';
import { UpdateEdificioDto } from '../dto/update-edificio.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { EdificioEntity } from '../entities/edificio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EdificiosService {
  private readonly logger = new Logger('EdificioService');

  constructor(
    @InjectRepository(EdificioEntity) private readonly edificioRepository: Repository<EdificioEntity>,
  ) { }

  public async create(createEdificioDto: CreateEdificioDto) {
    try {
      const edificio = this.edificioRepository.create(createEdificioDto);
      return await this.edificioRepository.save(edificio);
    } catch (error) {
      this.handlerError(error);
    }
  }

  public async findAll(paginationDto: PaginationDto) {
    try {
      const { limit, offset } = paginationDto;
      if (limit && offset) return await this.edificioRepository.find({ take: limit, skip: offset });
      if (limit) return await this.edificioRepository.find({ take: limit });
      return await this.edificioRepository.find();
    } catch (error) {
      this.handlerError(error);
    }
  }

  public async findOne(id: string) {
    try {
      return await this.edificioRepository.findOne({ where: { id } });
    } catch (error) {
      this.handlerError(error);
    }
  }

  public async update(id: string, updateEdificioDto: UpdateEdificioDto) {
    try {
      const edificio = await this.findOne(id);
      this.edificioRepository.merge(edificio, updateEdificioDto);
      return await this.edificioRepository.save(edificio);
    } catch (error) {
      this.handlerError(error);
    }
  }

  public async remove(id: string) {
    try {
      const edificio = await this.findOne(id);
      return await this.edificioRepository.remove(edificio);
    } catch (error) {
      this.handlerError(error);
    }
  }

  handlerError(error: any) {
    this.logger.error(error.message);
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new InternalServerErrorException(error.message);
  }
}
