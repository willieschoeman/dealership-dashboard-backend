import { Injectable, NotFoundException } from '@nestjs/common';
import * as mongo from 'mongodb';
import { InjectDb } from 'nest-mongodb';
import { MongoService } from '../services/mongo.service';

@Injectable()
export class DealerManagementService {

    private readonly stockCollection: mongo.Collection

    constructor(@InjectDb() private readonly db: mongo.Db, private mongoService: MongoService) {
        this.stockCollection = this.db.collection('stock')
    }

    // Get The Stock For A Dealer
    async getStockForDealer(dealerId: string) {

        let query = { "dealerId": dealerId }

        const stock = await this.mongoService.findMongo(this.stockCollection, query)
        return stock
    }

    // Get The Stock For A Dealer
    async getStockForDealerById(dealerId: string, id: string) {

        let query = { "dealerId": dealerId, "_id": new mongo.ObjectID(id) }

        const stock = await this.mongoService.findMongo(this.stockCollection, query)
        return stock
    }

    // Add Stock For A Dealer
    async addStockForDealer(body: any) {

        const stock = await this.mongoService.insertOneMongo(this.stockCollection, body)
        return stock
    }

    // Add Stock For A Dealer
    async deleteStockForDealer(id: string) {

        const stock = await this.mongoService.deleteOneMongo(this.stockCollection, id)
        return stock
    }

    // Update Stock For A Dealer
    async updateStockById(id: string, body: any) {

        const stock = await this.mongoService.updateOneMongo(this.stockCollection, id, body)
        return stock
    }

}
