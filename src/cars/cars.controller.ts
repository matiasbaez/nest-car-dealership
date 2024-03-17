import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseUUIDPipe,
	Patch,
	Post,
	Put,
} from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from './dtos';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
	constructor(private readonly carsService: CarsService) {}

	@Get()
	getCars() {
		return this.carsService.getCars();
	}

	@Get(':id')
	getCarById(@Param('id', ParseUUIDPipe) id: string) {
		return this.carsService.getCarById(id);
	}

	@Post()
	create(@Body() createCarDto: CreateCarDto) {
		return this.carsService.create(createCarDto);
	}

	@Put(':id')
	update(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() updateCarDto: UpdateCarDto,
	) {
		return this.carsService.update(id, updateCarDto);
	}

	@Patch(':id')
	patch(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() updateCarDto: UpdateCarDto,
	) {
		return this.carsService.update(id, updateCarDto);
	}

	@Delete(':id')
	remove(@Param('id', ParseUUIDPipe) id: string) {
		return this.carsService.remove(id);
	}
}
