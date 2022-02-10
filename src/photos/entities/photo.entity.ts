import { Field, ID, ObjectType } from '@nestjs/graphql'
import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { User } from '../../users/entities/user.entity'

@Entity({
	name: 'photos',
})
@ObjectType()
export class Photo {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id: number

	@Column()
	title: string

	@Column({ length: 150, nullable: true })
	description?: string

	@Column()
	filename: string

	@Column({
		default: false,
	})
	isPublished?: boolean = false

	@ManyToOne(() => User, user => user.photos, {
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE',
	})
	user: User

	@Column()
	userId: number

	@CreateDateColumn({
		type: 'timestamp with time zone',
		update: false,
	})
	createdAt?: Date

	@UpdateDateColumn({
		type: 'timestamp with time zone',
	})
	updatedAt?: Date
}
