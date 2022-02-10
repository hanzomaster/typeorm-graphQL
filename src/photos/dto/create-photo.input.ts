import { InputType } from '@nestjs/graphql'
import {
	IsBoolean,
	IsInt,
	IsNotEmpty,
	IsOptional,
	IsPositive,
	IsString,
	MaxLength,
} from 'class-validator'

@InputType()
export class CreatePhotoInput {
	@IsString()
	@IsNotEmpty()
	title: string

	@IsString()
	@IsNotEmpty()
	filename: string

	@IsBoolean()
	@IsOptional()
	isPublished?: boolean = false

	@IsString()
	@MaxLength(150)
	@IsOptional()
	description?: string

	@IsInt()
	@IsPositive()
	@IsNotEmpty()
	userId: number
}
