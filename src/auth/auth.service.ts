import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(authPayload: any) {
    return {
      access_token: this.jwtService.sign(authPayload)
    };
  }
}
