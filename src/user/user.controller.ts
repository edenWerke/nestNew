import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

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
  @Post()
  createUser(@Body() createUserDto:CreateUserDto){
    return {data:createUserDto,message:'User created successfully'}
  }
}
