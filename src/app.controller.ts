import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

interface AuthParams {
  userId: string;
  username: string;
}

@Controller('api')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/generate')
  generateAuthToken(@Body() authParams: AuthParams) {
    if (!authParams.userId) {
      throw new BadRequestException('invalid auth params');
    }
    return this.authService.generateToken(authParams);
  }
}
