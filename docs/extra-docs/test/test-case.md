# Test cases

::: info

- Fields aren't noted with `Optional` are required
- Fields aren't noted with `Emptyable` are Non-emptyable???

:::

## Auth / Manage Account

- First Name (0 < x <=255)
- Last name (Optional) (0 < x <=255)
- Email (0 < x <=255, email form)
- Password (4 <= x <= 255, Contains both uppercase/lowercase)
- Date of birth (Date picker, 0 < x <= 255)
- Phone number (Optional, 10 <=x <= 11, start with 0)
- Address (Optional, 0 < x <= 255)
  > - Required from frontend while checking out
  > - Single, not multiple

## Add Product

- Product:
  - Name
  - Description
  - Brand (Select available or create new)
  - Product image(s)\*
  - Product variant(s) (Create right after)\*
  - Product option(s) (Optional)\*
  - Product category/categories (Select available or create new)

- Product image(s):
  - Upload all first
  - Set (only) one of those to be primary (aka banner?)

- Product variant(s):
  - Price
  - Quantity
  - Image (Select uploaded previously)
    > 1 Product variant can have multiple images but how to show in the frontend?

- Product option(s):
  - Select available or create new
    > It means, we have a list of available options (globally for all products)
  - Each option should have product option value

## Cart

... Same as yours

## Review a product

- Rate (aka star 0 < rate <= 5)
- Content (Optional)
- Image (Optional)

## Delete a product (staff/admin)

- Click and go go, expect disappear
