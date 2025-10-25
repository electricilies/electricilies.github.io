# Class Diagram

```plantuml
@startuml

hide circle
skinparam classFontStyle bold
skinparam classAttributeIconSize 0
skinparam packageStyle rectangle


class User {
  - id : string
  - username : string
  - firstName : string
  - lastName : string
  - email : string
  - dateOfBirth : date
  - phoneNumber : string
  - address : string
  - role : string
  - createdAt : date
  - deletedAt : date

  + signUp(username, password, firstName, lastName, email, dateOfBirth, phoneNumber, address)
  + signIn(username, password)
  + signOut()
  + editProfile(username, password, firstName, lastName, email, dateOfBirth, phoneNumber, address)
  + deleteAccount()
  + changePassword(oldPassword, newPassword)
  + recoverAccount(email)
  + ban()
  + unban()
}

class Product {
  - id : int
  - name : string
  - description : string
  - brand : string
  - createdAt : date
  - updatedAt : date
  - deletedAt : date

  + create(name, description, brand)
  + update(name, description, brand)
  + delete()
  + getDetails()
  + getReviews()
  + getSuggestedProducts()
  + getVariants()
  + getImages()
}

class ProductVariant {
  - id : int
  - sku : string
  - price : decimal
  - quantity : int
  - createdAt : date
  - deletedAt : date
  - productId : int

  + create(productId, sku, price, quantity)
  + update(sku, price, quantity)
  + delete()
  + getPrice()
  + checkAvailability()
}

class ProductImage {
  - id : int
  - url : string
  - altText : string
  - createdAt : date
  - order: int
  - productId : int

  + create(productId, url, altText, order)
  + update(url, altText, order)
  + delete()
  + getUrl()
  + changeOrder(order)
}

class Review {
  - id : int
  - rating : int
  - content : string
  - imageUrl : string
  - createdAt : date
  - updatedAt : date
  - userId : string
  - productId : int

  + create(userId, productId, rating, content, images)
  + update(content, rating)
  + delete()
}


class Cart {
  - id : int
  - userId : string
  - updatedAt : date

  + create(userId)
  + addItem(productId, variantId, quantity)
  + removeItem(itemId)
  + updateQuantity(itemId, quantity)
  + getItems()
  + clear()
  + calculateTotal()
}

class CartItem {
  - id : int
  - quantity : int
  - cartId : int
  - productId : int
  - productVariantId : int

  + updateQuantity(quantity)
  + remove()
  + getSubtotal()
}


class Order {
  - id : int
  - createdAt : date
  - updatedAt : date
  - userId : string
  - orderStatus : string
  - paymentDetailId : int

  + create(userId, items, paymentDetails)
  + cancel()
  + update(orderStatus)
  + delete()
  + getDetails()
  + getItems()
  + updateStatus(status)
  + getTrackingInfo()
}

class OrderItem {
  - id : int
  - quantity : int
  - orderId : int
  - productId : int
  - productVariantId : int

  + getSubtotal()
  + returnProduct(reason)
}


class PaymentDetail {
  - id : int
  - amount : decimal
  - updatedAt : date
  - paymentMethod : string
  - paymentStatus : string
  - paymentProvider : string

  + create(amount, paymentMethod, paymentProvider)
  + update(amount, paymentMethod)
  + process()
  + updateStatus(status)
  + refund()
}


class ReturnRequest {
  - id : int
  - reason : string
  - createdAt : date
  - updatedAt : date
  - status : string
  - userId : string
  - orderItemId : int

  + create(userId, orderItemId, reason)
  + updateStatus(status)
  + approve()
  + reject()
}

class Refund {
  - id : int
  - createdAt : date
  - updatedAt : date
  - status : string
  - paymentDetailId : int
  - returnRequestId : int

  + create(paymentDetailId, returnRequestId)
  + process()
  + updateStatus(status)
}



User "1" --> "0..1" Cart : has
User "1" --> "0..*" Order : places
User "1" --> "0..*" Review : writes
User "1" --> "0..*" ReturnRequest : submits

Product "1" *-- "1..*" ProductVariant : has
Product "1" *-- "0..*" ProductImage : has
Product "1" --> "0..*" Review : receives

Cart "1" *-- "0..*" CartItem : contains
CartItem "0..*" --> "1" Product : references
CartItem "0..*" --> "1" ProductVariant : selects

Order "1" *-- "1..*" OrderItem : contains
Order "1" --> "1" PaymentDetail : pays with
OrderItem "0..*" --> "1" Product : references
OrderItem "0..*" --> "1" ProductVariant : selects

ReturnRequest "1" --> "1" OrderItem : for
Refund "1" --> "1" ReturnRequest : processes
Refund "0..*" --> "1" PaymentDetail : refunds to

@enduml
```

<!-- diagram id="class-diagram" -->
