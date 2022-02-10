import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User) private readonly userRepo: Repository<User>,
	) {}
	async create(createUserInput: CreateUserInput): Promise<User> {
		try {
			const newUser = this.userRepo.create(createUserInput)
			return this.userRepo.save(newUser)
		} catch (error) {
			throw new BadRequestException(error.message)
		}
	}

	async findAll(): Promise<User[]> {
		return this.userRepo.find()
	}

	async findOne(id: number): Promise<User> {
		return this.userRepo.findOneOrFail(id)
	}

	async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
		const user = await this.findOne(id)
		if (!user) {
			throw new BadRequestException("Can't find user to update")
		}
		this.userRepo.update(id, updateUserInput)
		return this.userRepo.save(user)
	}

	async remove(id: number): Promise<User> {
		const user = await this.findOne(id)
		if (!user) {
			throw new BadRequestException("Can't find user to delete")
		}
		return this.userRepo.remove(user)
	}
}
