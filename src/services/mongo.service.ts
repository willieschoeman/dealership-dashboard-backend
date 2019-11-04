import { Injectable, NotFoundException } from '@nestjs/common';
import * as mongo from 'mongodb';

@Injectable()
export class MongoService {

    // Insert Mongo
    public async insertOneMongo(collection: mongo.Collection, body: any) {

        let result;

        try {
            result = await collection.insertOne(body)
        } catch (error) {
            throw new NotFoundException('Unable to insert!');
        }

        if (!result) {
            throw new NotFoundException('Unable to insert!');
        }

        return result;
    }

    // Find Mongo
    public async findMongo(collection: mongo.Collection, query: any) {

        let result;

        try {
            result = await collection.find(query).toArray();
        } catch (error) {
            throw new NotFoundException('Unable to find!');
        }

        if (!result) {
            throw new NotFoundException('Unable to find!');
        }

        return result;
    }

    // Delete Mongo
    public async deleteOneMongo(collection: mongo.Collection, id: string) {

        let result;

        try {
            result = await collection.deleteOne({ "_id" : new mongo.ObjectID(id) })
        } catch (error) {
            throw new NotFoundException('Unable to delete!');
        }

        if (!result) {
            throw new NotFoundException('Unable to delete!');
        }

        return result;
    }

    // Update Mongo
    public async updateOneMongo(collection: mongo.Collection, id: string, body: any) {

        let result;

        try {
            result = await collection.updateOne({ "_id": new mongo.ObjectID(id) }, { $set: body } )
        } catch (error) {
            throw new NotFoundException('Unable to update!');
        }

        if (!result) {
            throw new NotFoundException('Unable to update!');
        }

        return result;
    }

}