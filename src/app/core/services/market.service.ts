import { Observable, of } from 'rxjs';
import { Market } from '../interfaces/market.interface';
import { Injectable } from '@angular/core';
import { ProductDetail } from '../interfaces/product-detail-interface';

const MARKET: Market = {
  categories: [
    {
      name: 'Pizzas a la carta',
      description: 'Pizzas a la carta',
      src: 'https://example.com/pizza.jpg',
      products: [
        {
          name: 'Vegi BBQ',
          description:
            'Salsa de tomates, queso mozzarella, carne vegetal, salsa barbecue + 3 vegetales a elección.',
          src: 'https://example.com/laptop.jpg',
          options: [
            {
              id: 1,
              description: 'Mediana',
              price: 12500,
            },
            {
              id: 2,
              description: 'Familiar',
              price: 15500,
            },
          ],
        },
        {
          name: 'Bacon BBQ',
          description:
            'Salsa de tomates, queso mozzarella, carne molida, cebolla, salsa barbecue y pimentón.',
          src: 'https://example.com/smartphone.jpg',
          options: [
            {
              id: 3,
              description: 'Mediana',
              price: 12500,
            },
            {
              id: 4,
              description: 'Familiar',
              price: 15500,
            },
          ],
        },
        {
          name: 'Súper Pepperoni',
          description:
            'Salsa de tomates, queso mozzarella, carne molida, cebolla, salsa barbecue y pimentón.',
          src: 'https://example.com/smartphone.jpg',
          options: [
            {
              id: 5,
              description: 'Mediana',
              price: 11500,
            },
            {
              id: 6,
              description: 'Familiar',
              price: 14500,
            },
          ],
        },
        {
          name: 'Carnivora',
          description:
            'Salsa de tomates, queso mozzarella, carne molida, cebolla, salsa barbecue y pimentón.',
          src: 'https://example.com/smartphone.jpg',
          options: [
            {
              id: 7,
              description: 'Mediana',
              price: 11500,
            },
            {
              id: 8,
              description: 'Familiar',
              price: 14500,
            },
          ],
        },
        {
          name: 'Nüpu',
          description:
            'Salsa de tomates, queso mozzarella, carne molida, cebolla, salsa barbecue y pimentón.',
          src: 'https://example.com/smartphone.jpg',
          options: [
            {
              id: 9,
              description: 'Mediana',
              price: 10500,
            },
            {
              id: 10,
              description: 'Familiar',
              price: 13500,
            },
          ],
        },
        {
          name: 'Hawaiana',
          description:
            'Salsa de tomates, queso mozzarella, carne molida, cebolla, salsa barbecue y pimentón.',
          src: 'https://example.com/smartphone.jpg',
          options: [
            {
              id: 11,
              description: 'Mediana',
              price: 10500,
            },
            {
              id: 12,
              description: 'Familiar',
              price: 13500,
            },
          ],
        },
        {
          name: 'Cuatro quesos',
          description:
            'Salsa de tomates, queso mozzarella, carne molida, cebolla, salsa barbecue y pimentón.',
          src: 'https://example.com/smartphone.jpg',
          options: [
            {
              id: 13,
              description: 'Mediana',
              price: 10500,
            },
            {
              id: 14,
              description: 'Familiar',
              price: 13500,
            },
          ],
        },
        {
          name: 'Margarita',
          description:
            'Salsa de tomates, queso mozzarella, carne molida, cebolla, salsa barbecue y pimentón.',
          src: 'https://example.com/smartphone.jpg',
          options: [
            {
              id: 15,
              description: 'Mediana',
              price: 10500,
            },
            {
              id: 16,
              description: 'Familiar',
              price: 13500,
            },
          ],
        },
      ],
    },
    {
      name: 'Pizzas dulces',
      description: 'Pizzas dulces',
      src: 'https://example.com/clothing.jpg',
      products: [
        {
          name: 'Nüpunüts',
          description:
            'Masa de pizza delgada con nuestra mantequilla de maní, chispas de chocolate y salsa de chocolate.',
          src: 'https://example.com/tshirt.jpg',
          options: [
            {
              id: 17,
              description: 'default',
              price: 5000,
            },
          ],
        },
        {
          name: 'Dulce Tentación',
          description:
            'Masa de pizza delgada con crema choco-avellana, frutillas y chispas de chocolate.',
          src: 'https://example.com/jeans.jpg',
          options: [
            {
              id: 18,
              description: 'default',
              price: 5000,
            },
          ],
        },
        {
          name: 'Doñihue Style',
          description:
            'Masa de pizza delgada con manjar, plátano & disco merengue casero.',
          src: 'https://example.com/jeans.jpg',
          options: [
            {
              id: 19,
              description: 'default',
              price: 5000,
            },
          ],
        },
      ],
    },
    {
      name: 'Combos',
      description: 'Pizzas dulces',
      src: 'https://example.com/clothing.jpg',
      products: [
        {
          name: 'Combo Duo Mid',
          description:
            'Masa de pizza delgada con nuestra mantequilla de maní, chispas de chocolate y salsa de chocolate.',
          src: 'https://example.com/tshirt.jpg',
          options: [
            {
              id: 20,
              description: 'default',
              price: 15000,
            },
          ],
        },
        {
          name: 'Dulce Tentación',
          description:
            'Masa de pizza delgada con crema choco-avellana, frutillas y chispas de chocolate.',
          src: 'https://example.com/jeans.jpg',
          options: [
            {
              id: 21,
              description: 'default',
              price: 5000,
            },
          ],
        },
        {
          name: 'Doñihue Style',
          description:
            'Masa de pizza delgada con manjar, plátano & disco merengue casero.',
          src: 'https://example.com/jeans.jpg',
          options: [
            {
              id: 22,
              description: 'default',
              price: 5000,
            },
          ],
        },
      ],
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  getMarket(): Observable<Market> {
    return of(MARKET);
  }

  getProduct(id: number): Observable<ProductDetail | null> {
    let productDetail = null;
    for (const category of MARKET.categories) {
      for (const product of category.products) {
        if (product.options.some((option) => option.id === id)) {
          productDetail = {
            id: id,
            name: product.name,
            description: product.description,
            src: product.src,
            price:
              product.options.find((option) => option.id === id)?.price || 0,
          };
          return of(productDetail);
        }
        console.log(id);
      }
    }
    return of(productDetail);
  }
}
