import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World from ZEIT Now!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Hello World from ZEIT Now!');
    });
  });

  describe('getLiveTime', () => {
    it('should return Hello john, it\'s 4/5/2021 at 15:10:30', () => {
      const appController = app.get<AppController>(AppController);
      const d: string = 'May 04, 2021 15:10:30';
      expect(appController.getLiveTime('john', d)).toBe('Hello john, it\'s 4/5/2021 at 15:10:30');
    });
  });
});
