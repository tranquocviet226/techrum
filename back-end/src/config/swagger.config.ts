export default (): Record<string, any> => ({
  swagger_auth_path: process.env.SWAGGER_AUTH_PATH,
  swagger_user_path: process.env.SWAGGER_USER_PATH,
  swagger_product_path: process.env.SWAGGER_PRODUCT_PATH

});