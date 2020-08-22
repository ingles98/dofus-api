import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { SetModule } from './set/set.module';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        GraphQLModule.forRoot({
            debug: false,
            playground: true,
            autoSchemaFile: 'schema.gql',
            context: ({ req, res }) => ({ req, res }),
            cors: {
                credentials: true,
                origin: true,
            },
        }),
        DatabaseModule,
        SetModule,
        EquipmentModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
