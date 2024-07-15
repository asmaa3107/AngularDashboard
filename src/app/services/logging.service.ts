import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  /**
   * Logs a message to the console with a prefix indicating that it is an API response.
   *
   * @param {string} message - The message to be logged.
   */
  simplelog(message: string) {
    console.log(`Api Response is - x ${message}`, message);
  }

  formatedMessageLog(message: string): void {
    console.log(
      `%cApi Response is - ${message}`,
      'background: blue; color: yellow; font-size: 14px;',
      message
    );
  }
}
