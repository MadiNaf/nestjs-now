import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from ZEIT Now!';
  }

  /**
   * @param username - the user name to display
   * @param date - a string date e.j 'May 04, 2021 15:10:30'
   * @returns - Hello username, it's DD/MM/YYYY at HH:MM:SS
   */
  getLiveTime(username: string, date?: string): string {
    const today: Date = !!date ? new Date(date) : new Date();
    const d: string = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const t: string = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return `Hello ${username}, it's ${d} at ${t}`;
  }
}
