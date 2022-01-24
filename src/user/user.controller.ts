import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { UserService } from '../user/user.service';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUser(@Request() req) {
    return this.userService.findOne(req.user.username);
  }
}
