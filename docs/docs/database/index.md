# Database

```d2
vars: {
  d2-config: {
    layout-engine: elk
    theme-id: 3
  }
}

**.shape: sql_table

user: {
  id: uuid {constraint: PK}
  avatar: varchar
  first_name: varchar
  last_name: varchar
  username: varchar {constraint: UNQ}
  email: varchar {constraint: UNQ}
  birth_of_day: varchar
  phone_number: varchar
  created_at: timestamp
}

wishlist: {
  id: int {constraint: PK}
  user_id: uuid {constraint: [UNQ, FK]}
}

address: {
  id: int {constraint: PK}
  address_line: varchar
  city: varchar
  country: varchar
  phone_number: varchar
  created_at: timestamp
  user_id: uuid {constraint: FK}
}

category: {
  id: int {constraint: PK}
  description: varchar
  created_at: timestamp
  deleted_at: timestamp
}

brand: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
}

product: {
  id: int {constraint: PK}
  name: varchar
  description: varchar
  created_at: timestamp
  updated_at: timestamp
  deleted_at: timestamp
  branch_id: int {constraint: FK}
}

review: {
  id: int {constraint: PK}
  rating: int {constraint: "0 &lt; x &lt; 5"}
  content: varchar
  created_at: timestamp
  updated_at: timestamp
  deleted_at: timestamp
  user_id: uuid {constraint: FK}
  product_id: int {constraint: FK}
}

comment: {
  id: int {constraint: PK}
  content: varchar
  created_at: timestamp
  updated_at: timestamp
  deleted_at: timestamp
  review_id: int {constraint: FK}
  user_id: uuid {constraint: FK}
}

product_wishlist: {
  product_id: int {constraint: [PK, FK]}
  wishlist_id: int {constraint: [PK, FK]}
}

product_category: {
  product_id: int {constraint: [PK, FK]}
  category_id: int {constraint: [PK, FK]}
}

product_variant: {
  id: int {constraint: PK}
  sku: varchar {constraint: UNQ}
  price: decimal
  quantity: int
  created_at: timestamp
  deleted_at: timestamp
  product_id: int {constraint: FK}
}

option_value: {
  id: int {constraint: PK}
  value: varchar
  option_id: int {constraint: FK}
}

product_variant_option_value: {
  product_variant_id: int {constraint: [PK, FK]}
  option_value_id: int {constraint: [PK, FK]}
}

option: {
  id: int {constraint: PK}
  name: varchar {constraint: UNQ}
}

cart: {
  id: int {constraint: PK}
  user_id: uuid {constraint: [UNQ, FK]}
  updated_at: timestamp
}

cart_item: {
  id: int {constraint: PK}
  quantity: int
  cart_id: int {constraint: FK}
  product_id: int {constraint: FK}
  product_variant_id: int {constraint: FK}
}

order_status: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
}

payment_method: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
}

payment_status: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
}

payment_provider: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
}

payment_detail: {
  id: int {constraint: PK}
  amount: decimal
  updated_at: timestamp
  payment_method_id: int {constraint: FK}
  payment_status_id: int {constraint: FK}
  payment_provider_id: int {constraint: FK}
}

order: {
  id: int {constraint: PK}
  created_at: timestamp
  updated_at: timestamp
  user_id: uuid {constraint: FK}
  order_status_id: int {constraint: FK}
  payment_detail_id: int {constraint: FK}
}

order_item: {
  id: int {constraint: PK}
  quantity: int
  order_id: int {constraint: FK}
  product_id: int {constraint: FK}
  product_variant_id: int {constraint: FK}
}

address.user_id -> user.id
product_category.product_id -> product.id
product_category.category_id -> category.id
product_variant.product_id -> product.id
product_variant_option_value.product_variant_id -> product_variant.id
product_variant_option_value.option_value_id -> option_value.id
option_value.option_id -> option.id
wishlist.user_id -> user.id
product_wishlist.product_id -> product.id
product_wishlist.wishlist_id -> wishlist.id
product.brand_id -> brand.id
cart.user_id -> user.id
cart_item.cart_id -> cart.id
cart_item.product_variant_id -> product_variant.id
cart_item.product_id -> product.id
payment_detail.payment_provider_id -> payment_provider.id
payment_detail.payment_status_id -> payment_status.id
payment_detail.payment_provider_id -> payment_provider.id
payment_detail.payment_method_id -> payment_method.id
order.user_id -> user.id
order.payment_detail_id -> payment_detail.id
order.order_status_id -> order_status.id
order_item.order_id -> order.id
order_item.product_id -> product.id
order_item.product_variant_id -> product_variant.id
review.product_id -> product.id
review.user_id -> user.id
comment.review_id -> review.id
comment.user_id -> user.id
```

<!-- diagram id="database" -->
