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
  avatar: varchar
  first_name: varchar
  last_name: varchar
  username: varchar {constraint: UNQ}
  email: varchar {constraint: UNQ}
  birth_of_day: varchar
  phone_number: varchar
  created_at: timestamp
}

addresses: {
  id: int {constraint: PK}
  address_line: varchar
  city: varchar
  country: varchar
  phone_number: varchar
  created_at: timestamp
  user_id: uuid {constraint: FK}
}

categories: {
  id: int {constraint: PK}
  description: varchar
  created_at: timestamp
  deleted_at: timestamp
}

brands: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
}

products: {
  id: int {constraint: PK}
  name: varchar
  description: varchar
  created_at: timestamp
  updated_at: timestamp
  deleted_at: timestamp
  brand_id: int {constraint: FK}
}

product_analytics: {
  id: int {constraint: PK}
  views_count: int
  purchase_count: int
  trending_score: float
  product_id: int {constraint: [FK, UNQ]}
}

product_images: {
  id: int {constraint: PK}
  url: varchar
  alt_text: varchar
  created_at: timestamp
  is_primary: boolean
  product_id: int {constraint: FK}
  product_variant_id: int {constraint: [FK, nullable]}
}

reviews: {
  id: int {constraint: PK}
  rating: int {constraint: "0 &lt; x &lt; 5"}
  content: varchar
  image_url: varchar
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
  id: int {constraint: PK}
  sku: varchar {constraint: UNQ}
  price: decimal
  quantity: int
  created_at: timestamp
  deleted_at: timestamp
  product_id: int {constraint: FK}
}

option_values: {
  id: int {constraint: PK}
  value: varchar
  option_id: int {constraint: FK}
}

product_variant_option_values: {
  product_variant_id: int {constraint: [PK, FK]}
  option_value_id: int {constraint: [PK, FK]}
}

options: {
  id: int {constraint: PK}
  name: varchar {constraint: UNQ}
}

carts: {
  id: int {constraint: PK}
  user_id: uuid {constraint: [UNQ, FK]}
  updated_at: timestamp
}

cart_items: {
  id: int {constraint: PK}
  quantity: int
  cart_id: int {constraint: FK}
  product_id: int {constraint: FK}
  product_variant_id: int {constraint: FK}
}

order_statuses: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
}

payment_methods: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
}

payment_statuses: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
}

payment_providers: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
}

payment_details: {
  id: int {constraint: PK}
  amount: decimal
  updated_at: timestamp
  payment_method_id: int {constraint: FK}
  payment_status_id: int {constraint: FK}
  payment_provider_id: int {constraint: FK}
}

orders: {
  id: int {constraint: PK}
  created_at: timestamp
  updated_at: timestamp
  user_id: uuid {constraint: FK}
  order_status_id: int {constraint: FK}
  payment_detail_id: int {constraint: FK}
}

order_items: {
  id: int {constraint: PK}
  quantity: int
  order_id: int {constraint: FK}
  product_id: int {constraint: FK}
  product_variant_id: int {constraint: FK}
}

return_requests: {
  id: int {constraint: PK}
  reason: varchar
  created_at: timestamp
  updated_at: timestamp
  status_id: int {constraint: FK}
  user_id: uuid {constraint: FK}
  order_item_id: int {constraint: FK}
}

return_request_statuses: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
}

refunds: {
  id: int {constraint: PK}
  created_at: timestamp
  updated_at: timestamp
  status_id: int {constraint: FK}
  payment_detail_id: int {constraint: FK}
  return_request_id: int {constraint: FK}
}

refund_statuses: {
  id: int {constraint: PK}
  value: varchar {constraint: UNQ}
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
  Only FK marked with {constraint: [FK, nullable]} are nullable.
|
```

<!-- diagram id="database" -->
