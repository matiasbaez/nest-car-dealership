import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED, CARS_SEED } from './data';

@Injectable()
export class SeedService {
	constructor(
		private readonly carsService: CarsService,
		private readonly brandsService: BrandsService,
	) {}

	runSeed() {
		this.carsService.fillBrandsWithSeedData(CARS_SEED);
		this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);

		return `Seed executed successfully`;
	}
}
