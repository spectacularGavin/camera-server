import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';
import * as WebSocket from 'ws';
import { Logger } from '@nestjs/common';

@WebSocketGateway(18080)
export class CameraServerGateway implements OnGatewayInit<Server>, OnGatewayConnection<WebSocket>, OnGatewayDisconnect<WebSocket> {

  private readonly logger = new Logger(CameraServerGateway.name);

  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    this.logger.log(`Server initialized`);
  }

  handleConnection(client: WebSocket, ...args: any[]) {
    this.logger.log(`Client connected`, client);
  }

  handleDisconnect(client: WebSocket) {
    this.logger.log(`Client disconnected`, client);
  }

  @SubscribeMessage('ingress-stream')
  async handleMessage(client: WebSocket, payload: string) {
    this.logger.log('Recieved video stream', payload);
  }
}
