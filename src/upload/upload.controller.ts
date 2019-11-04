import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { UploadService } from './upload.service';
import { diskStorage } from 'multer'

@Controller('upload')
export class UploadController {

    constructor(private uploadService: UploadService) {

    }

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
          destination: '../dealership-dashboard-frontend/src/assets/images/'
          ,filename: (req, file, cb) => {
            const fileName = file.originalname;
            cb(null, `${fileName}`)
          }
        })
    }))
    async uploadFile(@UploadedFile() file) {
            return true
    }

}
