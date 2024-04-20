import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body('userName') userName: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const generatedId = await this.usersService.create(
      userName,
      email,
      password,
    );

    return { id: generatedId };
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}
