const env = process.env;

module.exports = {
  nodeEnv: env.NODE_ENV || 'development',
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};