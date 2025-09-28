# Database

```d2
users: {
  shape: sql_table
  id: uuid {constraint: primary_key}
  avatar: varchar
  first_name: varchar
  last_name: varchar
  username: varchar {constraint: unique}
  email: varchar {constraint: unique}
  birth_of_day: varchar
  phone_number: varchar
  created_at: timestamp
}

wishlists: {
  shape: sql_table
  id: int {constraint: primary_key}
  user_id: uuid {constraint: [unique,foreign_key]}
}

addresses: {
  shape: sql_table
  id: int {constraint: primary_key}
  address_line: varchar
  city: varchar
  country: varchar
  phone_number: varchar
  created_at: timestamp
  user_id: uuid {constraint: foreign_key}
}

categories: {
  shape: sql_table
  id: int {constraint: primary_key}
  description: varchar
  created_at: timestamp
  deleted_at: timestamp
}

branchs :{
  shape: sql_table
  id: int {constraint: primary_key}
  value: varchar{constraint: unique}
}

products: {
  shape: sql_table
  id: int {constraint: primary_key}
  name: varchar
  description: varchar
  created_at: timestamp
  updated_at: timestamp
  deleted_at: timestamp
  branch_id: int {constraint: foreign_key}
}

product_wishlists: {
  shape: sql_table
  product_id: int {constraint: [primary_key,foreign_key]}
  wishlist_id: int {constraint: [primary_key,foreign_key]}
}

product_categories: {
  shape: sql_table
  product_id: int {constraint: [primary_key,foreign_key]}
  category_id: int {constraint: [primary_key,foreign_key]}
}

product_variants: {
  shape: sql_table
  id: int {constraint: primary_key}
  sku: varchar {constraint: unique}
  price: decimal
  quanity: int
  created_at: timestamp
  deleted_at: timestamp
  product_id: int {constraint: foreign_key}
}

option_values:{
  shape: sql_table
  id: int {constraint: primary_key}
  value: varchar
  option_id: int {constraint: foreign_key}
}

product_variants_option_values: {
  shape: sql_table
  product_variant_id: int {constraint: [primary_key,foreign_key]}
  option_value_id: int {constraint: [primary_key,foreign_key]}
}

options: {
  shape: sql_table
  id: int {constraint: primary_key}
  name: varchar {constraint: unique}
}

carts: {
  shape: sql_table
  id: int {constraint: primary_key}
  user_id: uuid {constraint: [unique, foreign_key]}
  updated_at: timestamp
}

cart_items: {
  shape: sql_table
  id: int {constraint:primary_key}
  quanity: int
  cart_id: int {constraint: foreign_key}
  product_id: int {constraint: foreign_key}
  product_variant_id: int {constraint: foreign_key}
}

order_statuses: {
  shape: sql_table
  id: int {constraint: primary_key}
  value: varchar {constraint: unique}
}

payment_methods: {
  shape: sql_table
  id: int {constraint: primary_key}
  value: varchar {constraint:unique }
}

payment_statuses: {
  shape: sql_table
  id: int {constraint: primary_key}
  value: varchar {constraint:unique }
}

payment_providers: {
  shape: sql_table
  id: int {constraint: primary_key}
  value: varchar {constraint:unique }
}

payment_details: {
  shape: sql_table
  id: int {constraint: primary_key}
  amount: decimal
  updated_at: timestamp
  payment_method_id: int {constraint: foreign_key}
  payment_status_id: int {constraint: foreign_key}
  payment_provider_id: int {constraint: foreign_key}
}

orders: {
  shape: sql_table
  id: int {constraint: primary_key}
  created_at: timestamp
  updated_at: timestamp
  user_id: uuid {constraint: foreign_key}
  order_status_id: int {constraint: foreign_key}
  payment_detail_id: int {constraint: foreign_key}
}

order_items: {
  shape: sql_table
  id: int {constraint: primary_key}
  quanity: int
  order_id: int {constraint: foreign_key}
  product_id: int {constraint: foreign_key}
  product_variant_id: int {constraint: foreign_key}
}

addresses.user_id -> users.id

product_categories.product_id -> products.id
product_categories.category_id -> categories.id
product_variants.product_id -> products.id
product_variants_option_values.product_id -> products.id
product_variants_option_values.option_value_id -> option_values.id
option_values.option_id -> options.id
product_wishlists.product_id -> products.id
product_wishlists.wishlist_id -> wishlists.id
products.branch_id -> branchs.id
carts.user_id -> users.id
cart_items.cart_id -> carts.id
cart_items.product_variant_id -> product_variants.id
cart_items.product_id ->products.id
payment_details.payment_provider_id ->payment_providers.id
payment_details.payment_status_id -> payment_statuses.id
payment_details.payment_provider_id -> payment_providers.id
payment_details.payment_method_id ->payment_methods.id
orders.user_id -> users.id
orders.payment_detail_id -> payment_details.id
orders.order_status_id -> order_statuses.id
order_items.order_id ->orders.id
order_items.product_id -> products.id
order_items.product_variant_id -> product_variants.id
```

<!-- diagram id="database" -->
