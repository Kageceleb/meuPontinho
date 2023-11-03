import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('users')
export class UserController {
  @UseGuards(AuthGuard('jwt')) //comes from strategy
  @Get('me')
  getMe(@Req() req: Request) {
    console.log({
      user: req.user, //2:04
    });
    return req.user;
  }
}
