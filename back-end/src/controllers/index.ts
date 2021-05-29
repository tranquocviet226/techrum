//export controller
import { AuthController } from './auth/auth.controller';
import { CategoryController } from './category/category.controller';
import { PostController } from './post/post.controller';
import { RoleController } from './role/role.controller';
import { UploadController } from './upload.controller';

export default [
  AuthController,
  CategoryController,
  PostController,
  UploadController,
  RoleController
];
