import { Controller, Get, Post, Req, Body, Delete, Put } from '@nestjs/common';
import { DealerManagementService } from './dealer-management.service';
import { Request } from 'express';

@Controller('dealer-management')
export class DealerManagementController {

    constructor (private dealerService: DealerManagementService) {
    }

    @Get(":dealerId")
    getStockForDealer(@Req() request: Request) {

        const dealerId = request.params.dealerId
        return this.dealerService.getStockForDealer(dealerId)
    }

    @Get(":dealerId/:id")
    getStockForDealerById(@Req() request: Request) {

        const dealerId = request.params.dealerId
        const id = request.params.id
        return this.dealerService.getStockForDealerById(dealerId, id)
    }

    @Post()
    addStock(@Req() request: Request) {

        let stock = request.body
        stock.created = new Date()
        stock.updated = new Date()

        return this.dealerService.addStockForDealer(stock)

    }

    @Delete(":id")
    deleteStock(@Req() request: Request) {
        
        const stockId = request.params.id
        return this.dealerService.deleteStockForDealer(stockId)
    }

    @Put(":id")
    updateStock(@Req() request: Request) {
        
        const stockId = request.params.id
        let stock = request.body

        stock.created = new Date(stock.created)
        stock.updated = new Date()

        return this.dealerService.updateStockById(stockId, stock)
    }

}
