export interface FeatureProductsProps {
  type: string;
}
export interface RootObject {
  data: ProductProps[];
  meta: Meta;
}

export interface ProductProps {
  id: number;
  attributes: AttributesProps;
}
export interface AttributesProps {
  title: string;
  desc: string;
  price: number;
  isNew: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  type: string;
  img: Img;
  img2: Img;
  categories: Categories;
  sub_categories: Subcategories;
}

export interface Img {
  data: ImgDataProps;
}

export interface ImgDataProps {
  id: number;
  attributes: ImgAttributesProps;
}

export interface ImgAttributesProps {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: ImgFormatsProps;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}

export interface ImgFormatsProps {
  thumbnail: FormatThumbnailProps;
  medium: FormatThumbnailProps;
  large: FormatThumbnailProps;
  small: FormatThumbnailProps;
}

export interface FormatThumbnailProps {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Subcategories {
  data: SubcategoryProps[];
}

export interface SubcategoryProps {
  id: number;
  attributes: SubcategoriesAttributesProps;
}

export interface SubcategoriesAttributesProps {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Categories {
  data: CategoryProp[];
}

export interface CategoryProp {
  id: number;
  attributes: CategoryAttributesProps;
}

export interface CategoryAttributesProps {
  title: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
