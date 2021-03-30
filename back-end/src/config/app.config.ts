export default (): Record<string, any> => ({
  app_name: process.env.APP_NAME,
  app_port: process.env.APP_PORT,
  app_env: process.env.APP_ENV,
  app_key: process.env.APP_KEY,
  app_debug: process.env.APP_DEBUG,
  app_url: process.env.APP_URL,
  app_lang: process.env.APP_LANG,
  app_ver: process.env.APP_VER,
  app_description: process.env.APP_DESCRIPTON,
});
