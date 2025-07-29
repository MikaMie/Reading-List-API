import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateUserDTO } from './dto/update-user.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Get a single user' })
  @UseGuards(AuthGuard)
  @Get(':userId')
  async findUser(@Param('userId') userId: string): Promise<User> {
    return this.userService.findById(userId);
  }

  @ApiOperation({ summary: 'Update a single user' })
  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() dto: UpdateUserDTO,
  ): Promise<User> {
    return this.userService.updateUser(dto, userId);
  }

  @ApiOperation({ summary: 'Delete a single user' })
  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string): Promise<void> {
    await this.userService.deleteUser(userId);
  }
}
