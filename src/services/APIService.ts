import axios, { type Axios } from "axios";

interface Logger {
  log: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
}

type APIClient = Axios;

export class APIService {
  protected client: APIClient;
  protected logger: Logger;

  constructor(
    client: APIClient = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    }),
    logger: Logger = console
  ) {
    this.client = client;
    this.logger = logger;
  }
}
