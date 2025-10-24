# Test cases

::: info

- Fields aren't noted with `Optional` are required
- Fields aren't noted with `Emptyable` are Non-emptyable???

:::

## Auth / Manage Account

- First Name
- Last name (Optional)
- Email
- Password (Length >= 4, Contains both uppercase/lowercase)
- Date of birth (Date picker)
- Phone number (Optional)
- Address (Optional)
  - Required from frontend while checking out

## Add Product

- Product:
  - Name
  - Description
  - Brand (Select available or create new)
  - Product variant(s) (Create right after)
  - Product option (Optional) (Matrix each other)
  - Product image(s)
  - Product category (Select available or create new)

- Product variant:
  - Price
  - Stock

- Product Option:
  - ...???

## Cart

... Same as yours

## Review a product

- Rate (aka star 0 < rate <= 5)
- Content (Optional)
- Image (Optional)

## Delete a product (staff/admin)

- Click and go go, expected disappear
