import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateCarDto, UpdateCarDto } from './dtos';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
	private cars: Car[] = [
		{
			id: uuid(),
			brand: 'Toyota',
			model: 'Supra',
		},
		{
			id: uuid(),
			brand: 'Nissan',
			model: 'Skyline',
		},
		{
			id: uuid(),
			brand: 'BMW',
			model: 'M3',
		},
	];

	getCars() {
		return this.cars;
	}

	getCarById(id: string) {
		const car = this.cars.find((car) => car.id === id);
		if (!car) {
			throw new NotFoundException(`Car with ID ${id} not found`);
		}
		return car;
	}

	create(createCarDto: CreateCarDto) {
		const car: Car = {
			id: uuid(),
			...createCarDto,
		};

		this.cars.push(car);

		return car;
	}

	update(id: string, updateCarDto: UpdateCarDto) {
		const car: Car = this.getCarById(id);

		this.cars = this.cars.map((carDb) => {
			if (carDb.id === car.id) {
				return { ...carDb, ...updateCarDto, id };
			}
			return carDb;
		});

		return car;
	}

	remove(id: string) {
		const car: Car = this.getCarById(id);
		this.cars = this.cars.filter((carDb) => carDb.id !== car.id);
	}
}
