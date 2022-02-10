import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

const config: PostgresConnectionOptions = {
	type: 'postgres',
	port: 5432,
	host: 'localhost',
	username: 'hanzo',
	password: 'hide29f90892',
	schema: 'public',
	database: 'photo',
	entities: ['dist/**/*.entity{.ts,.js}'],
	synchronize: true,
	logging: true,
}

export default config
