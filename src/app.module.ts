import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { join } from 'path'
import config from '../ormconfig'
import { PhotosModule } from './photos/photos.module'
import { UsersModule } from './users/users.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot(config),
		GraphQLModule.forRoot({
			playground: false,
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
		}),
		UsersModule,
		PhotosModule,
	],
})
export class AppModule {}
