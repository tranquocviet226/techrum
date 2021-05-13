import { Injectable, Logger, Res } from '@nestjs/common';
import { BaseResponse } from '@response/base.response';

@Injectable()
export class UploadService {
  constructor() {}

  async uploadFile(file: Express.Multer.File): Promise<any> {
    const APP_URL = process.env.APP_URL;
    const APP_PORT = process.env.APP_PORT;
    const pathFile = APP_URL.concat(':')
    .concat(APP_PORT)
    .concat("/api/v1")
    .concat('/upload/files/')
    .concat(file?.filename);

    const data = {
      file_name: file?.filename,
      link: pathFile,
      flie_type: file?.mimetype
    }
 
    return data;
  }

  readFile(fileId: string, res: any) {
    res.sendFile(fileId, { root: 'files' }, (err: any) => {
      if (err) {
        res?.status(err?.status).end();
      }
    });
  }
}
