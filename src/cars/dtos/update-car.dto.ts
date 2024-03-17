import { IsOptional, IsString, IsUUID } from 'class-validator';

// dto -> data transfer object
export class UpdateCarDto {
	@IsString()
	@IsUUID()
	@IsOptional()
	readonly id?: string;

	@IsString()
	@IsOptional()
	readonly brand?: string;

	@IsString()
	@IsOptional()
	readonly model?: string;
}
