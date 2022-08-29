class Logger {
  environment: string | undefined;

  constructor() {
    this.environment = process.env.NODE_ENV;
  }

  log(message: string) {
    console.log(message);
  }

  debug(message: string) {
    if (this.environment === "development") {
      console.log(message);
    }
  }

  error(message: string) {
    console.error(message);
  }
}

const logger = new Logger();

export default logger;
