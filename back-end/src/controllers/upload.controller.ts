import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UploadService } from '@services/upload/upload.service';
import { SERVER_PORT } from '@utils/constant';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('Upload Controller')
@Controller(SERVER_PORT.concat('upload'))
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Get('files/:fileId')
  async serveImage(@Param('fileId') fileId, @Res() res): Promise<any> {
    this.uploadService.readFile(fileId, res);
  }

  @Post('')
  @ApiOkResponse({
    status: 200,
    type: 'Upload success',
    description: 'Upload success',
  })
  @ApiResponse({ status: 401, description: 'Upload failure' })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: (req, file, cb) => {
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${extname(file?.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.uploadFile(file);
  }
}
