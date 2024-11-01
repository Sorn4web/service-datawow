import { Controller, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller({
  version: '1',
  path: 'user',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
}
