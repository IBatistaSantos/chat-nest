import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { AppService } from './app.service';
import { Chat } from './chat/chat.entity';

import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway {
  constructor(private readonly appService: AppService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('sendMessage')
  async handleSendMessage(client: Socket, payload: Chat): Promise<void> {
    await this.appService.createMessage(payload);
    this.server.emit('recMessage', payload);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Connected ${client.id}`);
  }

  afterInit(server: any) {
    console.log(`Server initialized`);
  }
  handleDisconnect(client: any) {
    console.log(`Disconnected: ${client.id}`);
  }
}
