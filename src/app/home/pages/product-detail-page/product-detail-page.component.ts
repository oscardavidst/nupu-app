import { Component, inject, input } from '@angular/core';
import { MarketService } from '../../../core/services/market.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-detail-page',
  imports: [CommonModule],
  templateUrl: './product-detail-page.component.html',
  styles: ``,
})
export class ProductDetailPageComponent {
  idParam = input.required<string>();
  marketService = inject(MarketService);
  productResoruce = rxResource({
    request: () => ({ query: this.idParam() }),
    loader: ({ request }) => {
      if (!request.query) return of(null);
      return this.marketService.getProduct(+request.query);
    },
  });
}
