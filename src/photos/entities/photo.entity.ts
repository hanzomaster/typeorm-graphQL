import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Photo {
	@Field(() => Int, { description: 'Example field (placeholder)' })
	exampleField: number
}
