import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // pw hashen!
  async create(dto: CreateUserDTO): Promise<User> {
    const user = await this.userModel.findOne({ email: dto.email });

    if (user != null) {
      throw new ConflictException('User mit dieser E-Mail existiert bereits');
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(dto.password, salt);
      const user = new this.userModel({ ...dto, password: hash });
      return user.save();
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  async findbyEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new NotFoundException('User mit dieser E-Mail existiert nicht');
    }
    return user;
  }

  async updateUser(dto: UpdateUserDTO, id: string): Promise<User> {
    const user = await this.userModel
      .findByIdAndUpdate(id, dto, { new: true, runValidators: true })
      .exec();
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  async deleteUser(id: string): Promise<string> {
    const user = await this.userModel.deleteOne({ _id: id });
    return 'User gelöscht';
  }
}
