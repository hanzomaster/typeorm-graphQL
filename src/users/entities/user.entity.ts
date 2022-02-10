import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Photo } from '../../photos/entities/photo.entity'

@Entity({
	name: 'users',
})
@ObjectType()
export class User {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id: number

	@Column()
	username: string

	@Column()
	password: string

	@Column()
	firstName: string

	@Column()
	lastName: string

	@Column({
		unique: true,
	})
	email: string

	@OneToMany(() => Photo, photo => photo.user, {
		eager: true,
		cascade: true,
	})
	photos: Photo[]
}
