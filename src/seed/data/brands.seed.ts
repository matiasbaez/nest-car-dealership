import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
	{
		id: uuid(),
		name: 'Audi',
		createAt: new Date().getTime(),
	},
	{
		id: uuid(),
		name: 'BMW',
		createAt: new Date().getTime(),
	},
	{
		id: uuid(),
		name: 'Mercedes-Benz',
		createAt: new Date().getTime(),
	},
];
