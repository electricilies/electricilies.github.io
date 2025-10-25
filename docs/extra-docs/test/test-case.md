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

- Click and go go, expect disappear
