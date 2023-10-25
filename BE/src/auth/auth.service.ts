import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'Im have signed up!' };
  }
  signin() {
    return { msg: 'Im have signed in!' };
  }
}
