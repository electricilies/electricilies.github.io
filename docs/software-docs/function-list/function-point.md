## Function Point Analysis

### Step 1: Calculate Complexity-Weighted Quantities (∆)

| #   | Đại lượng                        | Số đại lượng (Ci) | Simple (W=3) | Average (W=4) | Complex (W=6) | Sum     |
| --- | -------------------------------- | ----------------- | ------------ | ------------- | ------------- | ------- |
| 1   | Chức năng nhập liệu (C1)         | 19                | 12           | 6             | 1             | 86      |
| 2   | Chức năng xuất dữ liệu (C2)      | 36                | 2            | 32            | 2             | 163     |
| 3   | Chức năng truy vấn dữ liệu (C3)  | 9                 | 3            | 0             | 6             | 51      |
| 4   | Tập tin dữ liệu (C4)             | 4                 | 0            | 0             | 4             | 32      |
| 5   | Giao tiếp với hệ thống khác (C5) | 1                 | 0            | 0             | 1             | 6       |
|     |                                  |                   |              |               | **∆ Total**   | **338** |

### Step 2: Complexity Adjustment Factors (Fi)

| #   | Fi                            | Điểm   |
| --- | ----------------------------- | ------ |
| 1   | Cập nhật và cứu dữ liệu       | 3      |
| 2   | Truyền thông                  | 2      |
| 3   | Xử lý phân bố                 | 1      |
| 4   | Vấn đề tốc độ                 | 2      |
| 5   | Vấn đề môi trường             | 1      |
| 6   | Nhập dữ liệu trực tuyến       | 4      |
| 7   | Transaction nhập dữ liệu      | 3      |
| 8   | Cập nhật trực tuyến           | 3      |
| 9   | Nhập, xuất, truy vấn phức tạp | 3      |
| 10  | Xử lý phức tạp                | 2      |
| 11  | Mã nguồn dùng lại             | 3      |
| 12  | Cài đặt                       | 1      |
| 13  | Nhiều nơi dùng                | 2      |
| 14  | Dễ thay đổi                   | 3      |
|     | **∑Fi**                       | **38** |

### Step 3: Calculate Function Points

**Formula:** FP = ∆ × (0.65 + 0.01 × ∑Fi)

- ∆ = 338
- ∑Fi = 38
- FP = 338 × (0.65 + 0.01 × 38)
- FP = 338 × (0.65 + 0.38)
- FP = 338 × 1.03
- **FP = 348.14**

### Summary

| Metric                           | Value      |
| -------------------------------- | ---------- |
| Total Functions                  | 48         |
| Complexity-Weighted Quantity (∆) | 338        |
| Sum of Adjustment Factors (∑Fi)  | 38         |
| Function Points (FP)             | **348.14** |
