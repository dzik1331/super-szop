export class Product {
  id: number;
  name: string;
  price: number;
  img: any;
  tags: string[];
  description: string;

  constructor(id: number, name: string, price: number, imgSmall: string, description: string, tags?: string[]) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = imgSmall;
    this.description = description || '';
    this.tags = tags || [];
  }
}
