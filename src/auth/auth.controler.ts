import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { UserAuthDto } from './user.auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() userAuth: UserAuthDto) {
    return this.authService.login(userAuth.username, userAuth.password);
  }

  @Post('signup')
  async signUp(@Body() user: User) {
    return this.userService.saveUser(user);
  }
}
