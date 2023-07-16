// Interface automatically generated by schemas-to-ts

import { Restaurant } from '../../../restaurant/content-types/restaurant/restaurant';
import { Product } from '../../../product/content-types/product/product';
import { Restaurant_Plain } from '../../../restaurant/content-types/restaurant/restaurant';
import { Product_Plain } from '../../../product/content-types/product/product';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Category {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    restaurants?: { data: Restaurant[] };
    product?: { data: Product };
  };
}
export interface Category_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  restaurants?: Restaurant_Plain[];
  product?: Product_Plain;
}

export interface Category_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  restaurants?: number[];
  product?: number;
}

export interface Category_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  restaurants?: AdminPanelRelationPropertyModification<Restaurant_Plain>[];
  product?: AdminPanelRelationPropertyModification<Product_Plain>;
}
