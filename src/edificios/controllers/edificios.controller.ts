import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EdificiosService } from '../services/edificios.service';
import { CreateEdificioDto } from '../dto/create-edificio.dto';
import { UpdateEdificioDto } from '../dto/update-edificio.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('edificios')
export class EdificiosController {
  constructor(private readonly edificiosService: EdificiosService) { }

  // @ApiBearerAuth()
  // @RolesAccess('ADMIN')
  @Post()
  create(@Body() createEdificioDto: CreateEdificioDto) {
    return this.edificiosService.create(createEdificioDto);
  }

  // @ApiBearerAuth()
  // @ApiQuery({ name: 'limit', type: 'number', required: false })
  // @ApiQuery({ name: 'offset', type: 'number', required: false })
  // @RolesAccess('ADMIN')
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.edificiosService.findAll(paginationDto);
  }

  // @ApiBearerAuth()
  // @ApiParam({ name: 'id', type: 'string' })
  // @RolesAccess('ADMIN')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.edificiosService.findOne(id);
  }

  // @ApiBearerAuth()
  // @ApiParam({ name: 'id', type: 'string' })
  // @RolesAccess('ADMIN')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEdificioDto: UpdateEdificioDto) {
    return this.edificiosService.update(id, updateEdificioDto);
  }

  // @RolesAccess('ADMIN')
  // @ApiBearerAuth()
  // @ApiParam({ name: 'id', type: 'string' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.edificiosService.remove(id);
  }
}
