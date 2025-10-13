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
  avatar: varchar(255)
  first_name: varchar(50)
  last_name: varchar(50)
  username: varchar(50) {constraint: UNQ}
  email: varchar(100) {constraint: UNQ}
  birth_of_day: varchar(20)
  phone_number: varchar(20)
  created_at: timestamp
}

addresses: {
  id: serial {constraint: PK}
  address_line: varchar(255)
  city: varchar(100)
  country: varchar(100)
  phone_number: varchar(20)
  created_at: timestamp
  user_id: uuid {constraint: FK}
}

categories: {
  id: serial {constraint: PK}
  description: varchar(255)
  created_at: timestamp
  deleted_at: timestamp
}

brands: {
  id: serial {constraint: PK}
  value: varchar(100) {constraint: UNQ}
}

products: {
  id: serial {constraint: PK}
  name: varchar(100)
  description: varchar(255)
  created_at: timestamp
  updated_at: timestamp
  deleted_at: timestamp
  brand_id: int {constraint: FK}
}

product_analytics: {
  id: serial {constraint: PK}
  views_count: int
  purchase_count: int
  trending_score: float
  product_id: int {constraint: [FK, UNQ]}
}

product_images: {
  id: serial {constraint: PK}
  url: varchar(255)
  alt_text: varchar(100)
  created_at: timestamp
  is_primary: boolean
  product_id: int {constraint: FK}
  product_variant_id: int {constraint: [FK, nullable]}
}

reviews: {
  id: serial {constraint: PK}
  rating: int {constraint: "0 &lt; x &lt; 5"}
  content: varchar(255)
  image_url: varchar(255)
  created_at: timestamp
  updated_at: timestamp
  deleted_at: timestamp
  user_id: uuid {constraint: FK}
  product_id: int {constraint: FK}
}

product_categories: {
  product_id: int {constraint: [PK, FK]}
  category_id: int {constraint: [PK, FK]}
}

product_variants: {
  id: serial {constraint: PK}
  sku: varchar(50) {constraint: UNQ}
  price: decimal
  quantity: int
  created_at: timestamp
  deleted_at: timestamp
  product_id: int {constraint: FK}
}

option_values: {
  id: serial {constraint: PK}
  value: varchar(100)
  option_id: int {constraint: FK}
}

product_variant_option_values: {
  product_variant_id: int {constraint: [PK, FK]}
  option_value_id: int {constraint: [PK, FK]}
}

options: {
  id: serial {constraint: PK}
  name: varchar(100) {constraint: UNQ}
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
  product_id: int {constraint: FK}
  product_variant_id: int {constraint: FK}
}

order_statuses: {
  id: serial {constraint: PK}
  value: varchar(50) {constraint: UNQ}
}

payment_methods: {
  id: serial {constraint: PK}
  value: varchar(50) {constraint: UNQ}
}

payment_statuses: {
  id: serial {constraint: PK}
  value: varchar(50) {constraint: UNQ}
}

payment_providers: {
  id: serial {constraint: PK}
  value: varchar(50) {constraint: UNQ}
}

payment_details: {
  id: serial {constraint: PK}
  amount: decimal
  updated_at: timestamp
  payment_method_id: int {constraint: FK}
  payment_status_id: int {constraint: FK}
  payment_provider_id: int {constraint: FK}
}

orders: {
  id: serial {constraint: PK}
  created_at: timestamp
  updated_at: timestamp
  user_id: uuid {constraint: FK}
  order_status_id: int {constraint: FK}
  payment_detail_id: int {constraint: FK}
}

order_items: {
  id: serial {constraint: PK}
  quantity: int
  order_id: int {constraint: FK}
  product_id: int {constraint: FK}
  product_variant_id: int {constraint: FK}
}

return_requests: {
  id: serial {constraint: PK}
  reason: varchar(255)
  created_at: timestamp
  updated_at: timestamp
  status_id: int {constraint: FK}
  user_id: uuid {constraint: FK}
  order_item_id: int {constraint: FK}
}

return_request_statuses: {
  id: serial {constraint: PK}
  value: varchar(50) {constraint: UNQ}
}

refunds: {
  id: serial {constraint: PK}
  created_at: timestamp
  updated_at: timestamp
  status_id: int {constraint: FK}
  payment_detail_id: int {constraint: FK}
  return_request_id: int {constraint: FK}
}

refund_statuses: {
  id: serial {constraint: PK}
  value: varchar(50) {constraint: UNQ}
}

addresses.user_id -> users.id
product_categories.product_id -> products.id
product_categories.category_id -> categories.id
product_variants.product_id -> products.id
product_variant_option_values.product_variant_id -> product_variants.id
product_variant_option_values.option_value_id -> option_values.id
option_values.option_id -> options.id
products.brand_id -> brands.id
carts.user_id -> users.id
cart_items.cart_id -> carts.id
cart_items.product_variant_id -> product_variants.id
cart_items.product_id -> products.id
payment_details.payment_provider_id -> payment_providers.id
payment_details.payment_status_id -> payment_statuses.id
payment_details.payment_provider_id -> payment_providers.id
payment_details.payment_method_id -> payment_methods.id
orders.user_id -> users.id
orders.payment_detail_id -> payment_details.id
orders.order_status_id -> order_statuses.id
order_items.order_id -> orders.id
order_items.product_id -> products.id
order_items.product_variant_id -> product_variants.id
reviews.product_id -> products.id
reviews.user_id -> users.id
product_analytics.product_id -> products.id
product_images.product_id -> products.id
product_images.product_variant_id -> product_variants.id
return_requests.user_id -> users.id
return_requests.status_id -> return_request_statuses.id
return_requests.order_item_id -> order_items.id
refunds.status_id -> refund_statuses.id
refunds.return_request_id -> return_requests.id
refunds.payment_detail_id -> payment_details.id

explanation: |md
  # Note
  - All FK are NOT NULL by default.
  - Only FK marked with {constraint: [FK, nullable]} are nullable.
|
```

<!-- diagram id="database" -->
