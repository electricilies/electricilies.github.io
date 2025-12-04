# Class Diagram

```plantuml
@startuml Electricilies

skinparam classFontStyle bold
skinparam classAttributeIconSize 0
skinparam packageStyle rectangle
/' skinparam linetype ortho '/
/' skinparam linetype polyline '/

package "User" {
    class User {}
}

package "Electricilies" {
    class Category {
        ID: uuid
        Name: string
    }

    class Product {
        ID: uuid
        Name: string
        Description: string
        ViewsCount: int
        TotalPurchase: int
        TrendingScore: int
        Price: int
        Rating: float
        AddVariant(ProductVariant)
        RemoveVariant(ProductVariant)
        AddImage(ProductImage)
        RemoveImage(ProductImage)
    }

    class Option {
        ID: uuid
        Name: string
    }

    class OptionValue {
        ID: uuid
        Value: string
    }

    class ProductVariant {
        ID: uuid
        SKU: string
        Price: int
        Quantity: int
        PurchaseCount: int
        AddImage(ProductImage)
        RemoveImage(ProductImage)
    }

    class ProductImage {
        ID: uuid
        URL: string
        Order: int
    }

    class Attribute {
        ID: uuid
        Name: string
        AddValue(AttributeValue)
    }

    class AttributeValue {
        ID: uuid
        Value: string
    }

    class Cart {
        ID: uuid
        AddItem(ProductVariant, quantity: int)
        Remove(CartItem)
    }

    class CartItem {
        ID: uuid
        Quantity: int
    }

    class Order {
        ID: uuid
        Recipient: string
        Address: string
        Provider: OrderProvider
        Status: OrderStatus
        isPaid: bool
        TotalAmount: int
    }

    enum OrderStatus {
        Pending
        Processing
        Shipped
        Delivered
        Cancelled
    }

    class OrderItem {
        ID: uuid
        OrderID: uuid
        Quantity: int
        Price: int
    }

    enum OrderProvider {
        COD
        VNPAY
        MOMO
        ZALOPAY
    }

    class Review {
        ID: uuid
        Rating: int
        Content: string?
        ImageURL: string?
    }

    Product "1" *--- "0..*" Option : contains
    Product "1" *--- "1..*" ProductVariant : contains
    Product "1" *--- "1..*" ProductImage : contains

    Option "1" *--- "1..*" OptionValue : contains

    Product "0..*" o--- "0..*" AttributeValue : has

    ProductVariant "0" --- "0" OptionValue : not configured by (no option)
    ProductVariant "1..*" o---* "1..*" OptionValue : configured by
    ProductVariant "1" o--- "0..*" ProductImage : has

    Product "0..*" ---> "1" Category : categorized by

    Attribute "1" *--- "0..*" AttributeValue : contains

    Cart "1" *--- "0..*" CartItem : contains
    CartItem ---> ProductVariant : references

    Order "1" *--- "1..*" OrderItem : contains
    OrderItem ---> ProductVariant : references

    Order ...> Cart : <<creates from>>
    Order --> OrderProvider
    Order --> OrderStatus

    Review "0..1" ---* "1" OrderItem : reviews
}

Cart ---> User
Order ---> User
Review ---> User

@enduml
```

<!-- diagram id="class-diagram" -->
