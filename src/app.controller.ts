import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRootMessage(): string {
    return 'Welcome!';
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('time/:name')
  getLiveTime(@Param('name') name: string, d?: string): string {
    return this.appService.getLiveTime(name, d);
  }
}
