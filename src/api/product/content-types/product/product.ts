// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { Category } from '../../../category/content-types/category/category';
import { Category_Plain } from '../../../category/content-types/category/category';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Product {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name?: string;
    sku: string;
    price: number;
    image_url?: { data: Media };
    category?: { data: Category };
  };
}
export interface Product_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  sku: string;
  price: number;
  image_url?: Media;
  category?: Category_Plain;
}

export interface Product_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  sku: string;
  price: number;
  image_url?: number;
  category?: number;
}

export interface Product_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name?: string;
  sku: string;
  price: number;
  image_url?: AdminPanelRelationPropertyModification<Media>;
  category?: AdminPanelRelationPropertyModification<Category_Plain>;
}
