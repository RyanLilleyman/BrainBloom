import { Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signin')
  signIn() {
    return 'SignedIn';
  }

  @Post('signup')
  signUp() {
    return 'SignedUp';
  }
}
