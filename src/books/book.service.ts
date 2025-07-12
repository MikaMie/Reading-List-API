import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  private readonly books: Book[] = [];

  create(book: CreateBookDto): Book {
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }

  findAllByName(bookName: string): Book[] {
    return this.books.filter((book) => book.title === bookName);
  }

  update(index: number, updateData: UpdateBookDto) {
    this.books[index] = { ...this.books[index], ...updateData };
  }
}
