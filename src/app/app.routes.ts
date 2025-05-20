import { Routes } from '@angular/router';
import { CategoryPageComponent } from './categories/pages/category-page/category-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { OrderPageComponent } from './orders/pages/order-page/order-page.component';
import { ProductDetailPageComponent } from './home/pages/product-detail-page/product-detail-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'detail/:id',
    component: ProductDetailPageComponent,
  },
  {
    path: 'order',
    component: OrderPageComponent,
  },
  {
    path: 'category',
    component: CategoryPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
