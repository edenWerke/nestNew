import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser(@Query('name') name?: string) {
    const users = [
      { id: 1, name: 'Eden' },
      { id: 2, name: 'John' },
      { id: 3, name: 'Alice' },
    ];

    if (name) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    return users;
  }
    @Get(':id')
  getUserById(@Param('id') id: string) {
    return {
      id,
      name: 'Eden',
    };
  }
}
