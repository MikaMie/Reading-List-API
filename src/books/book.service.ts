import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(dto: CreateBookDto): Promise<Book> {
    const book = new this.bookModel(dto);
    return book.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findById(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id).exec();
    if (!book) throw new NotFoundException(`Book ${id} not found`);
    return book;
  }

  async update(id: string, dto: UpdateBookDto): Promise<Book> {
    const book = await this.bookModel
      .findByIdAndUpdate(id, dto, { new: true, runValidators: true })
      .exec();
    if (!book) throw new NotFoundException(`Book ${id} not found`);
    return book;
  }

  async remove(id: string): Promise<void> {
    const res = await this.bookModel.findByIdAndDelete(id).exec();
    if (!res)
      throw new NotFoundException(
        `Book ${id} could not be deleted, because it was not found!`,
      );
  }
}
