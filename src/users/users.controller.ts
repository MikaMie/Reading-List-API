import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/new-user')
  async createUsr(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.userService.create(createUserDTO);
  }

  @Get(':userId')
  async findUser(@Param('userId') userId: string): Promise<User> {
    return this.userService.findById(userId);
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() dto: UpdateUserDTO,
  ): Promise<User> {
    return this.userService.updateUser(dto, userId);
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string): Promise<void> {
    this.userService.deleteUser(userId);
  }
}
