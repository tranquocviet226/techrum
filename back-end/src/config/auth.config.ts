export default (): Record<string, any> => ({
  secret_key: process.env.SECRET_KEY,
  time_to_life: process.env.TIME_TO_LIFE,
});
