import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { MarketService } from '../../../core/services/market.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styles: ``,
})
export class HomePageComponent {
  marketService = inject(MarketService);
  router = inject(Router);

  marketResource = rxResource({
    loader: () => this.marketService.getMarket(),
  });
}
