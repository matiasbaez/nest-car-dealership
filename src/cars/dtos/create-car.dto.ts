import { IsString } from 'class-validator';

// dto -> data transfer object
export class CreateCarDto {
	@IsString()
	readonly brand: string;

	@IsString()
	readonly model: string;
}
