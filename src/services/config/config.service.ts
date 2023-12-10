import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class ConfigService {
  constructor() {}

  getAppConfig() {
    return {
      env: process.env.NODE_ENV || 'development',
      port: parseInt(process.env.APP_PORT, 10) || 9000,
      corsOrigins: ['http://localhost:4200', 'http://localhost:5555', 'http://localhost:8080'],
    }
  }
}
