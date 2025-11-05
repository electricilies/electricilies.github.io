# Database

```d2
vars: {
  d2-config: {
    layout-engine: elk
    theme-id: 3
  }
}

**.shape: sql_table
explanation.shape: rectangle

users: {
  id: uuid {constraint: PK}
}

categories: {
  id: serial {constraint: PK}
  name: text {constraint: UNQ}
  created_at: timestamp
  updated_at: timestamp
  deleted_at: timestamp {constraint: N}
}

products: {
  id: serial {constraint: PK}
  name: text
  description: text
  views_count: int
  total_purchase: int
  trending_score: float
  created_at: timestamp
  updated_at: timestamp
  deleted_at: timestamp {constraint: N}
}

attributes: {
  id: serial {constraint: PK}
  code: varchar(100) {constraint: UNQ}
  name: text
  deleted_at: timestamp
}

attribute_values: {
  id: serial {constraint: PK}
  attribute_id: int {constraint: FK}
  value: text
}

products_attribute_values: {
  product_id: int {constraint: [PK, FK]}
  attribute_value_id: int {constraint: [PK, FK]}
}

product_images: {
  id: serial {constraint: PK}
  url: text
  order: int
  created_at: timestamp
  product_variant_id: int {constraint: [FK, N]}
}

reviews: {
  id: serial {constraint: PK}
  rating: int {constraint: "1  &#8804; x &#8804; 5"}
  content: text {constraint: N}
  image_url: text
  user_id: uuid {constraint: FK}
  product_id: int {constraint: FK}
  created_at: timestamp
  updated_at: timestamp
  deleted_at: timestamp {constraint: N}
}

products_categories: {
  product_id: int {constraint: [PK, FK]}
  category_id: int {constraint: [PK, FK]}
}

product_variants: {
  id: serial {constraint: PK}
  sku: text {constraint: UNQ}
  price: decimal
  quantity: int
  purchase_count: int
  product_id: int {constraint: FK}
  created_at: timestamp
  updated_at: timestamp
  deleted_at: timestamp {constraint: N}
}

option_values: {
  id: serial {constraint: PK}
  value: text
  option_id: int {constraint: FK}
}

option_values_product_variants: {
  product_variant_id: int {constraint: [PK, FK]}
  option_value_id: int {constraint: [PK, FK]}
}

options: {
  id: serial {constraint: PK}
  name: text
  product_id: int {constraint: FK}
  deleted_at: timestamp {constraint: N}
}

carts: {
  id: serial {constraint: PK}
  user_id: uuid {constraint: [UNQ, FK]}
  updated_at: timestamp
}

cart_items: {
  id: serial {constraint: PK}
  quantity: int
  cart_id: int {constraint: FK}
  product_variant_id: int {constraint: FK}
}

order_statuses: {
  id: serial {constraint: PK}
  name: text {constraint: UNQ}
}

payment_statuses: {
  id: serial {constraint: PK}
  name: text {constraint: UNQ}
}

payment_providers: {
  id: serial {constraint: PK}
  name: text {constraint: UNQ}
}

payments: {
  id: serial {constraint: PK}
  amount: decimal
  updated_at: timestamp
  status_id: int {constraint: FK}
  provider_id: int {constraint: FK}
  order_id: int {constraint: FK}
}

orders: {
  id: serial {constraint: PK}
  created_at: timestamp
  updated_at: timestamp
  user_id: uuid {constraint: FK}
  status_id: int {constraint: FK}
}

order_items: {
  id: serial {constraint: PK}
  quantity: int
  order_id: int {constraint: FK}
  product_variant_id: int {constraint: FK}
}

return_requests: {
  id: serial {constraint: PK}
  reason: varchar(150)
  created_at: timestamp
  updated_at: timestamp
  status_id: int {constraint: FK}
  user_id: uuid {constraint: FK}
  order_item_id: int {constraint: FK}
}

return_request_statuses: {
  id: serial {constraint: PK}
  name: text {constraint: UNQ}
}

refunds: {
  id: serial {constraint: PK}
  created_at: timestamp
  updated_at: timestamp
  status_id: int {constraint: FK}
  payment_id: int {constraint: FK}
  return_request_id: int {constraint: FK}
}

refund_statuses: {
  id: serial {constraint: PK}
  name: text {constraint: UNQ}
}

products_categories.product_id -> products.id
products_categories.category_id -> categories.id
product_variants.product_id -> products.id
products_attribute_values.product_id -> products.id
products_attribute_values.attribute_value_id -> attribute_values.id
attribute_values.attribute_id -> attributes.id
option_values_product_variants.product_variant_id -> product_variants.id
option_values_product_variants.option_value_id -> option_values.id
option_values.option_id -> options.id
options.product_id -> products.id
carts.user_id -> users.id
cart_items.cart_id -> carts.id
cart_items.product_variant_id -> product_variants.id
payments.provider_id -> payment_providers.id
payments.status_id -> payment_statuses.id
orders.user_id -> users.id
payments.order_id -> orders.id
orders.status_id -> order_statuses.id
order_items.order_id -> orders.id
order_items.product_variant_id -> product_variants.id
reviews.product_id -> products.id
reviews.user_id -> users.id
product_images.product_variant_id -> product_variants.id
return_requests.user_id -> users.id
return_requests.status_id -> return_request_statuses.id
return_requests.order_item_id -> order_items.id
refunds.status_id -> refund_statuses.id
refunds.return_request_id -> return_requests.id
refunds.payment_id -> payments.id

explanation: |md

  - All foreign keys (FK) are **NOT NULL** by default.
  - Only column marked with `{constraint: N}` can be null.
|
```

<!-- diagram id="database" -->
