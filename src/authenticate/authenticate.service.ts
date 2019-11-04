import { Injectable, NotFoundException } from '@nestjs/common';
import * as mongo from 'mongodb';
import { InjectDb } from 'nest-mongodb';
import { MongoService } from '../services/mongo.service';

@Injectable()
export class AuthenticateService {

    private readonly usersCollection: mongo.Collection
 
    constructor(@InjectDb() private readonly db: mongo.Db, private mongoService: MongoService) {
        this.usersCollection = this.db.collection('users')
    }

    async authenticate(username: string, password: string) {

        let query = {"email": username}

        const user = await this.mongoService.findMongo(this.usersCollection, query)

        if (user[0].password == password) {
            return {
                success: true,
                dealerId: user[0].dealerId
            }
        } else {
            return {
                success: false
            }
        }

    }
}
