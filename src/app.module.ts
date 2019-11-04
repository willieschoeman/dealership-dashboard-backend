import { Module } from '@nestjs/common';
import { AuthenticateController } from './authenticate/authenticate.controller';
import { AuthenticateService } from './authenticate/authenticate.service';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { DealerManagementController } from './dealer-management/dealer-management.controller';
import { DealerManagementService } from './dealer-management/dealer-management.service';
import { MongoModule } from 'nest-mongodb';
import { MongoService } from './services/mongo.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongoModule.forRoot('mongodb://127.0.0.1', 'dealership'),
    MulterModule
  ],
  controllers: [
    AuthenticateController, 
    UploadController, 
    DealerManagementController
  ],
  providers: [
    AuthenticateService, 
    UploadService, 
    DealerManagementService,
    MongoService
  ],
})
export class AppModule {}
