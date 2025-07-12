import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { BooksService } from './book.service';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async publishBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  @Get(':bookId')
  async findBook(@Param('bookId') id: string): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Patch(':bookId')
  async updateBook(
    @Param('bookId') id: string,
    @Body() dto: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.update(id, dto);
  }

  @Delete(':bookId')
  async deleteBook(@Param('bookId') id: string): Promise<void> {
    this.bookService.remove(id);
  }
}
