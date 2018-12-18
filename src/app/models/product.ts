export class Product {
  id: number;
  name: string;
  price: number;
  img: any;
  tags: string[];
  description: string;
  producer: string;
  seller: string;
  userId: number;

  constructor(id: number, name: string, price: number, imgSmall: string, description: string, producer: string, seller: string, userId: number, tags?: string[]) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = imgSmall;
    this.description = description || '';
    this.tags = tags || [];
    this.producer = producer;
    this.seller = seller;
    this.userId = userId;
  }
}
