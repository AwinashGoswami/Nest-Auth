import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('app')
export class AppController {
  constructor() { }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    return req.user;
  }
}
