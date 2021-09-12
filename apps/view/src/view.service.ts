import { Injectable } from '@nestjs/common';
import { NextServer } from 'next/dist/server/next';
import createServer from 'next';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ViewService {
  private server: NextServer;

  constructor(private configService: ConfigService) { }

  async onModuleInit(): Promise<void> {
    try {
      const dir = this.configService.get<string>('CLIENT_PATH') ?? './apps/client';
      this.server = createServer({
        dev: this.configService.get<string>('NODE_ENV') !== 'production',
        dir
      });
      await this.server.prepare();
    } catch (error) {
      console.error(error);
    }
  }

  async onModuleDestroy(): Promise<void> {
    await this.server.close();
  }

  getNextServer(): NextServer {
    return this.server;
  }
}
