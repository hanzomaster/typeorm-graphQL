import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreatePhotoInput } from './dto/create-photo.input'
import { UpdatePhotoInput } from './dto/update-photo.input'
import { Photo } from './entities/photo.entity'
import { PhotosService } from './photos.service'

@Resolver(() => Photo)
export class PhotosResolver {
	constructor(private readonly photosService: PhotosService) {}

	@Mutation(() => Photo)
	createPhoto(
		@Args('createPhotoInput') createPhotoInput: CreatePhotoInput,
	): Promise<Photo> {
		return this.photosService.create(createPhotoInput)
	}

	@Query(() => [Photo], { name: 'photos' })
	findAll(): Promise<Photo[]> {
		return this.photosService.findAll()
	}

	@Query(() => Photo, { name: 'photo' })
	findOne(@Args('id', { type: () => Int }) id: number): Promise<Photo> {
		return this.photosService.findOne(id)
	}

	@Mutation(() => Photo)
	updatePhoto(
		@Args('updatePhotoInput') updatePhotoInput: UpdatePhotoInput,
	): Promise<Photo> {
		return this.photosService.update(updatePhotoInput.id, updatePhotoInput)
	}

	@Mutation(() => Photo)
	removePhoto(@Args('id', { type: () => Int }) id: number): Promise<Photo> {
		return this.photosService.remove(id)
	}
}
