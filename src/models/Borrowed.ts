import { Book } from "./Book";

export interface Borrowed {
  id: string;
  dateBorrow: Date;
  dateReturn: Date;
  status: number;
  qty: number;
  book: Book;
}
