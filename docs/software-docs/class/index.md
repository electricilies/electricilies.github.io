# Class Diagram

````plantuml
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
    - address : string
    - dateOfBirth : Date
    - phoneNumber : string
    - createdAt : Date
    - deletedAt : Date

    + signUp(username, password, email, fullName)
    + signIn(username, password)
    + signOut()
    + editProfile(data)
    + deleteAccount()
    + recoverAccount(email)
    + resetPassword(currentPassword, newPassword)
}


class Product {
    - id : int
    - name : string
    - description : string
    - brand : string
    - createdAt : Date
    - updatedAt : Date
    - deletedAt : Date

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
    - createdAt : Date
    - deletedAt : Date
    - productId : int

    + getPrice()
    + checkAvailability()
}

class ProductImage {
    - id : int
    - url : string
    - altText : string
    - createdAt : Date
    - isPrimary : boolean
    - productId : int

    + getUrl()
    + setPrimary()
}

class Review {
    - id : int
    - rating : int
    - content : string
    - imageUrl : string
    - createdAt : Date
    - updatedAt : Date
    - userId : string
    - productId : int

    + create(userId, productId, rating, content, images)
    + update(content, rating)
    + delete()
}


class Cart {
    - id : int
    - userId : string
    - updatedAt : Date

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
    - createdAt : Date
    - updatedAt : Date
    - userId : string
    - orderStatus : string
    - paymentDetailId : int

    + create(userId, items, paymentDetails)
    + cancel()
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
    - updatedAt : Date
    - paymentMethod : string
    - paymentStatus : string
    - paymentProvider : string

    + process()
    + updateStatus(status)
    + refund()
}


class ReturnRequest {
    - id : int
    - reason : string
    - createdAt : Date
    - updatedAt : Date
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
    - createdAt : Date
    - updatedAt : Date
    - status : string
    - paymentDetailId : int
    - returnRequestId : int

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
@enduml```

<!-- diagram id="class-diagram" -->
````
