import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  constructor() {}

  async uploadFile(file: Express.Multer.File): Promise<any> {
    const APP_URL = process.env.APP_URL;
    const pathFile = APP_URL.concat('api/v1/upload/files/').concat(
      file?.filename,
    );

    const data = {
      file_name: file?.filename,
      link: pathFile,
      flie_type: file?.mimetype,
    };

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
