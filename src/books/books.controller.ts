import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './book.service';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @ApiOperation({ summary: 'Get all books' })
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @ApiOperation({ summary: 'Publish new book' })
  @ApiBody({ type: CreateBookDto })
  @UseGuards(AuthGuard)
  @Post('/publish')
  async publishBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  @ApiOperation({ summary: 'Get a single book' })
  @UseGuards(AuthGuard)
  @Get(':bookId')
  async findBook(@Param('bookId') id: string): Promise<Book> {
    return this.bookService.findById(id);
  }

  @ApiOperation({ summary: 'Update a single book' })
  @UseGuards(AuthGuard)
  @Patch(':bookId')
  async updateBook(
    @Param('bookId') id: string,
    @Body() dto: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.update(id, dto);
  }

  @ApiOperation({ summary: 'Delete a single book' })
  @UseGuards(AuthGuard)
  @Delete(':bookId')
  async deleteBook(@Param('bookId') id: string): Promise<void> {
    await this.bookService.remove(id);
  }
}
