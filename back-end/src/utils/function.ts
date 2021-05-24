import * as fs from 'fs';

export const deleteFileFs = (urlFile: string) => {
  const index = urlFile.lastIndexOf('/') + 1;
  const filename = urlFile.substr(index);
  fs.unlink(`files/${filename}`, () => {});
};
