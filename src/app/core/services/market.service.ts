import { Observable, of } from 'rxjs';
import { Market } from '../interfaces/market.interface';
import { Injectable } from '@angular/core';

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
              description: 'Mediana',
              price: 12500,
            },
            {
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
              description: 'Mediana',
              price: 12500,
            },
            {
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
              description: 'Mediana',
              price: 11500,
            },
            {
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
              description: 'Mediana',
              price: 11500,
            },
            {
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
              description: 'Mediana',
              price: 10500,
            },
            {
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
              description: 'Mediana',
              price: 10500,
            },
            {
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
              description: 'Mediana',
              price: 10500,
            },
            {
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
              description: 'Mediana',
              price: 10500,
            },
            {
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
}
