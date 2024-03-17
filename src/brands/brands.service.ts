import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
	private brands = [];

	create(createBrandDto: CreateBrandDto) {
		const brand: Brand = {
			id: uuid(),
			...createBrandDto,
			createAt: new Date().getTime(),
		};

		this.brands.push(brand);

		return brand;
	}

	findAll() {
		return this.brands;
	}

	findOne(id: string) {
		const brand = this.brands.find((brand) => brand.id === id);
		if (!brand) {
			throw new NotFoundException(`Brand with id ${id} not found`);
		}
		return brand;
	}

	update(id: string, updateBrandDto: UpdateBrandDto) {
		const brand: Brand = this.findOne(id);

		this.brands = this.brands.map((brandDb) => {
			if (brandDb.id === brand.id) {
				return {
					...brandDb,
					...updateBrandDto,
					createAt: new Date().getTime(),
					id,
				};
			}
			return brandDb;
		});

		return brand;
	}

	remove(id: string) {
		this.brands = this.brands.filter((brand) => brand.id !== id);
	}

	fillBrandsWithSeedData(brands: Brand[]) {
		this.brands = brands;
	}
}
