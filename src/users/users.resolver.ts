import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'
import { UsersService } from './users.service'

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Mutation(() => User)
	createUser(
		@Args('createUserInput') createUserInput: CreateUserInput,
	): Promise<User> {
		return this.usersService.create(createUserInput)
	}

	@Query(() => [User], { name: 'users' })
	findAll(): Promise<User[]> {
		return this.usersService.findAll()
	}

	@Query(() => User, { name: 'user' })
	findOne(@Args('id', { type: () => Int }) id: number): Promise<User> {
		return this.usersService.findOne(id)
	}

	@Mutation(() => User)
	updateUser(
		@Args('updateUserInput') updateUserInput: UpdateUserInput,
	): Promise<User> {
		return this.usersService.update(updateUserInput.id, updateUserInput)
	}

	@Mutation(() => User)
	removeUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
		return this.usersService.remove(id)
	}
}
