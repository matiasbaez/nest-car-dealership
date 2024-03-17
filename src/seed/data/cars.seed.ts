import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
	{
		id: uuid(),
		brand: 'Audi',
		model: 'A8L 40 TFSI Quattro +',
	},
	{
		id: uuid(),
		brand: 'BMW',
		model: 'M5 Competition',
	},
	{
		id: uuid(),
		brand: 'Mercedes-Benz',
		model: 'E Class Cabriolet AMG',
	},
];
