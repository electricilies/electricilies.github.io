# View Product

```plantulm
@startulm
actor Customer as C
boundary ProductViewList as PVL
boundary ProductView as PV
control ProductController as PC
entity BackendProductManagemant as BPM

C -> PVL: choose product from list
activate PVL
PVL -> PC: send request to get product information
activate PC
PC -> BPM: get product
activate BPM
BPM -> BPM: search in database
activate BPM
deactivate BPM
PC <-- BPM: product information
PVL <-- PC: product information
PVL -> PV: redirect to Product View
deactivate PVL
activate PV
PV -> PV: Show product information
activate PV
deactivate PV
opt Detail
  ref over C, BPM : View Product Detail
end

opt Preview
  ref over C, BPM : View Product Preview
end

opt Price
  ref over C, BPM : View Product Price
end

opt Rate
  ref over C, BPM : View Product Rate
end

opt Reviews & Comments
  ref over C, BPM : View Product Reviews Comments
end

opt Variants
  ref over C, BPM : View Product Variants
end

deactivate PV
deactivate PC
deactivate BPM
@endulm
```
