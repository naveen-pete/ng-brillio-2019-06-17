import { Injectable } from '@angular/core';

// Production
@Injectable()
export class LoggerService {
  log(message: any) {
    console.log('LoggerService.log():', message);

    // code to log to the server
  }
}

// Testing environment
@Injectable()
export class FakeLoggerService {
  log(message: any) {
    console.log('LoggerService.log():', message);
  }
}

