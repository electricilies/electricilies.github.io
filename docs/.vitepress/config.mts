import { defineConfig } from "vitepress";
import { configureDiagramsPlugin } from "vitepress-plugin-diagrams";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Electricilies Docs",
  description: "Electricilies docs",
  lang: "en-GB",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
    config: (md) => {
      configureDiagramsPlugin(md, {
        krokiServerUrl: process.env.KROKI_SERVER_URL,
      });
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Overview", link: "/overview" },
      { text: "Software Docs", link: "/software-docs" },
      { text: "Extra Docs", link: "/extra-docs" },
      { text: "OpenAPI", link: "/extra-docs/openapi" },
    ],

    sidebar: [
      {
        text: "Overview",
        items: [{ text: "Overview", link: "/overview" }],
      },
      {
        text: "Software Docs",
        items: [
          {
            text: "User Story",
            link: "/software-docs/user-story",
          },
          {
            text: "Use Case",
            collapsed: true,
            items: [
              {
                text: "Generic",
                link: "/software-docs/use-case/generic",
              },
              {
                text: "User",
                link: "/software-docs/use-case/user",
              },
              {
                text: "Customer",
                link: "/software-docs/use-case/customer",
              },
              {
                text: "Staff",
                link: "/software-docs/use-case/staff",
              },
              {
                text: "Admin",
                link: "/software-docs/use-case/admin",
              },
            ],
          },
          {
            text: "Sequence",
            link: "/software-docs/sequence",
            collapsed: true,
            items: [
              {
                text: "Adjust Document",
                collapsed: true,
                items: [
                  {
                    text: "Adjust Document",
                    link: "/software-docs/sequence/adjust-document/adjust-document",
                  },
                  {
                    text: "Create Document",
                    link: "/software-docs/sequence/adjust-document/create-document",
                  },
                  {
                    text: "Delete Document",
                    link: "/software-docs/sequence/adjust-document/delete-document",
                  },
                  {
                    text: "Search Document",
                    link: "/software-docs/sequence/adjust-document/search-document",
                  },
                  {
                    text: "Update Document",
                    link: "/software-docs/sequence/adjust-document/update-document",
                  },
                ],
              },
              {
                text: "Contact Support",
                collapsed: true,
                items: [
                  {
                    text: "Contact Support",
                    link: "/software-docs/sequence/contact-support/contact-support",
                  },
                ],
              },
              {
                text: "Manage Account",
                collapsed: true,
                items: [
                  {
                    text: "Delete Account",
                    link: "/software-docs/sequence/manage-account/delete-account",
                  },
                  {
                    text: "Edit Profile",
                    link: "/software-docs/sequence/manage-account/edit-profile",
                  },
                  {
                    text: "Link Account with Third Party",
                    link: "/software-docs/sequence/manage-account/link-account-with-third-party",
                  },
                  {
                    text: "Manage Account",
                    link: "/software-docs/sequence/manage-account/manage-account",
                  },
                  {
                    text: "Recover Account",
                    link: "/software-docs/sequence/manage-account/recover-account",
                  },
                  {
                    text: "Reset Password",
                    link: "/software-docs/sequence/manage-account/reset-password",
                  },
                  {
                    text: "Sign In",
                    link: "/software-docs/sequence/manage-account/sign-in",
                  },
                  {
                    text: "Sign Out",
                    link: "/software-docs/sequence/manage-account/sign-out",
                  },
                  {
                    text: "Sign Up",
                    link: "/software-docs/sequence/manage-account/sign-up",
                  },
                ],
              },
              {
                text: "Manage Cart",
                collapsed: true,
                items: [
                  {
                    text: "Change Product Amount",
                    link: "/software-docs/sequence/manage-cart/change-product-amount",
                  },
                  {
                    text: "Manage Cart",
                    link: "/software-docs/sequence/manage-cart/manage-cart",
                  },
                  {
                    text: "Purchase",
                    link: "/software-docs/sequence/manage-cart/purchase",
                  },
                  {
                    text: "Remove Product From Cart",
                    link: "/software-docs/sequence/manage-cart/remove-product-from-cart",
                  },
                ],
              },
              {
                text: "Manage Product",
                collapsed: true,
                items: [
                  {
                    text: "Add Product",
                    link: "/software-docs/sequence/manage-product/add-product",
                  },
                  {
                    text: "Delete Product",
                    link: "/software-docs/sequence/manage-product/delete-product",
                  },
                  {
                    text: "Delete Review",
                    link: "/software-docs/sequence/manage-product/delete-review",
                  },
                  {
                    text: "Manage Product",
                    link: "/software-docs/sequence/manage-product/manage-product",
                  },
                  {
                    text: "Search Product",
                    link: "/software-docs/sequence/manage-product/search-product",
                  },
                  {
                    text: "Update Product",
                    link: "/software-docs/sequence/manage-product/update-product",
                  },
                ],
              },
              {
                text: "Manage User",
                collapsed: true,
                items: [
                  {
                    text: "Change User Roles",
                    link: "/software-docs/sequence/manage-user/change-user-roles",
                  },
                  {
                    text: "Delete User",
                    link: "/software-docs/sequence/manage-user/delete-user",
                  },
                  {
                    text: "Manage User",
                    link: "/software-docs/sequence/manage-user/manage-user",
                  },
                  {
                    text: "Search User",
                    link: "/software-docs/sequence/manage-user/search-user",
                  },
                  {
                    text: "View Customer Report",
                    link: "/software-docs/sequence/manage-user/view-customer-report",
                  },
                  {
                    text: "View Staff Report",
                    link: "/software-docs/sequence/manage-user/view-staff-report",
                  },
                ],
              },
              {
                text: "View Customer Self Report",
                collapsed: true,
                items: [
                  {
                    text: "View Customer Self Report",
                    link: "/software-docs/sequence/view-customer-self-report/view-customer-self-report",
                  },
                ],
              },
              {
                text: "View Document",
                collapsed: true,
                items: [
                  {
                    text: "View Document",
                    link: "/software-docs/sequence/view-document/view-document",
                  },
                ],
              },
              {
                text: "View Order",
                collapsed: true,
                items: [
                  {
                    text: "Cancel Order",
                    link: "/software-docs/sequence/view-order/cancel-order",
                  },
                  {
                    text: "Return Product",
                    link: "/software-docs/sequence/view-order/return-product",
                  },
                  {
                    text: "Review Product",
                    link: "/software-docs/sequence/view-order/review-product",
                  },
                  {
                    text: "Search Order",
                    link: "/software-docs/sequence/view-order/search-order",
                  },
                  {
                    text: "View Order Detail",
                    link: "/software-docs/sequence/view-order/view-order-detail",
                  },
                  {
                    text: "View Order",
                    link: "/software-docs/sequence/view-order/view-order",
                  },
                ],
              },
              {
                text: "View Product",
                collapsed: true,
                items: [
                  {
                    text: "Add Product To Cart",
                    link: "/software-docs/sequence/view-product/add-product-to-cart",
                  },
                  {
                    text: "Search Product",
                    link: "/software-docs/sequence/view-product/search-product",
                  },
                  {
                    text: "View Product Detail",
                    link: "/software-docs/sequence/view-product/view-product-detail",
                  },
                  {
                    text: "View Product",
                    link: "/software-docs/sequence/view-product/view-product",
                  },
                  {
                    text: "View Product Reviews",
                    link: "/software-docs/sequence/view-product/view-product-reviews",
                  },
                  {
                    text: "View Suggested Product",
                    link: "/software-docs/sequence/view-product/view-suggested-product",
                  },
                ],
              },
              {
                text: "View Shop Report",
                collapsed: true,
                items: [
                  {
                    text: "View Shop Report",
                    link: "/software-docs/sequence/view-shop-report/view-shop-report",
                  },
                ],
              },
              {
                text: "View Staff Self Report",
                collapsed: true,
                items: [
                  {
                    text: "View Staff Self Report",
                    link: "/software-docs/sequence/view-staff-self-report/view-staff-self-report",
                  },
                ],
              },
              {
                text: "View System Monitoring",
                collapsed: true,
                items: [
                  {
                    text: "View System Monitoring",
                    link: "/software-docs/sequence/view-system-monitoring/view-system-monitoring",
                  },
                ],
              },
            ],
          },
          {
            text: "Activity",
            link: "/software-docs/activity",
            collapsed: true,
            items: [
              {
                text: "Adjust Document",
                collapsed: true,
                items: [
                  {
                    text: "Adjust Document",
                    link: "/software-docs/activity/adjust-document/adjust-document",
                  },
                  {
                    text: "Create Document",
                    link: "/software-docs/activity/adjust-document/create-document",
                  },
                  {
                    text: "Delete Document",
                    link: "/software-docs/activity/adjust-document/delete-document",
                  },
                  {
                    text: "Search Document",
                    link: "/software-docs/activity/adjust-document/search-document",
                  },
                  {
                    text: "Update Document",
                    link: "/software-docs/activity/adjust-document/update-document",
                  },
                ],
              },
              {
                text: "Contact Support",
                collapsed: true,
                items: [
                  {
                    text: "Contact Support",
                    link: "/software-docs/activity/contact-support/contact-support",
                  },
                ],
              },
              {
                text: "Manage Account",
                collapsed: true,
                items: [
                  {
                    text: "Delete Account",
                    link: "/software-docs/activity/manage-account/delete-account",
                  },
                  {
                    text: "Edit Profile",
                    link: "/software-docs/activity/manage-account/edit-profile",
                  },
                  {
                    text: "Link Account with Third Party",
                    link: "/software-docs/activity/manage-account/link-account-with-third-party",
                  },
                  {
                    text: "Manage Account",
                    link: "/software-docs/activity/manage-account/manage-account",
                  },
                  {
                    text: "Recover Account",
                    link: "/software-docs/activity/manage-account/recover-account",
                  },
                  {
                    text: "Reset Password",
                    link: "/software-docs/activity/manage-account/reset-password",
                  },
                  {
                    text: "Sign In",
                    link: "/software-docs/activity/manage-account/sign-in",
                  },
                  {
                    text: "Sign Out",
                    link: "/software-docs/activity/manage-account/sign-out",
                  },
                  {
                    text: "Sign Up",
                    link: "/software-docs/activity/manage-account/sign-up",
                  },
                ],
              },
              {
                text: "Manage Cart",
                collapsed: true,
                items: [
                  {
                    text: "Change Product Amount",
                    link: "/software-docs/activity/manage-cart/change-product-amount",
                  },
                  {
                    text: "Manage Cart",
                    link: "/software-docs/activity/manage-cart/manage-cart",
                  },
                  {
                    text: "Purchase",
                    link: "/software-docs/activity/manage-cart/purchase",
                  },
                  {
                    text: "Remove Product From Cart",
                    link: "/software-docs/activity/manage-cart/remove-product-from-cart",
                  },
                ],
              },
              {
                text: "Manage Product",
                collapsed: true,
                items: [
                  {
                    text: "Add Product",
                    link: "/software-docs/activity/manage-product/add-product",
                  },
                  {
                    text: "Delete Product",
                    link: "/software-docs/activity/manage-product/delete-product",
                  },
                  {
                    text: "Delete Review",
                    link: "/software-docs/activity/manage-product/delete-review",
                  },
                  {
                    text: "Manage Product",
                    link: "/software-docs/activity/manage-product/manage-product",
                  },
                  {
                    text: "Search Product",
                    link: "/software-docs/activity/manage-product/search-product",
                  },
                  {
                    text: "Update Product",
                    link: "/software-docs/activity/manage-product/update-product",
                  },
                ],
              },
              {
                text: "Manage User",
                collapsed: true,
                items: [
                  {
                    text: "Change User Roles",
                    link: "/software-docs/activity/manage-user/change-user-roles",
                  },
                  {
                    text: "Delete User",
                    link: "/software-docs/activity/manage-user/delete-user",
                  },
                  {
                    text: "Manage User",
                    link: "/software-docs/activity/manage-user/manage-user",
                  },
                  {
                    text: "Search User",
                    link: "/software-docs/activity/manage-user/search-user",
                  },
                  {
                    text: "View Customer Report",
                    link: "/software-docs/activity/manage-user/view-customer-report",
                  },
                  {
                    text: "View Staff Report",
                    link: "/software-docs/activity/manage-user/view-staff-report",
                  },
                ],
              },
              {
                text: "View Customer Self Report",
                collapsed: true,
                items: [
                  {
                    text: "View Customer Self Report",
                    link: "/software-docs/activity/view-customer-self-report/view-customer-self-report",
                  },
                ],
              },
              {
                text: "View Document",
                collapsed: true,
                items: [
                  {
                    text: "View Document",
                    link: "/software-docs/activity/view-document/view-document",
                  },
                ],
              },
              {
                text: "View Order",
                collapsed: true,
                items: [
                  {
                    text: "Cancel Order",
                    link: "/software-docs/activity/view-order/cancel-order",
                  },
                  {
                    text: "Return Product",
                    link: "/software-docs/activity/view-order/return-product",
                  },
                  {
                    text: "Review Product",
                    link: "/software-docs/activity/view-order/review-product",
                  },
                  {
                    text: "Search Order",
                    link: "/software-docs/activity/view-order/search-order",
                  },
                  {
                    text: "View Order Detail",
                    link: "/software-docs/activity/view-order/view-order-detail",
                  },
                  {
                    text: "View Order",
                    link: "/software-docs/activity/view-order/view-order",
                  },
                ],
              },
              {
                text: "View Product",
                collapsed: true,
                items: [
                  {
                    text: "Add Product To Cart",
                    link: "/software-docs/activity/view-product/add-product-to-cart",
                  },
                  {
                    text: "Search Product",
                    link: "/software-docs/activity/view-product/search-product",
                  },
                  {
                    text: "View Product Detail",
                    link: "/software-docs/activity/view-product/view-product-detail",
                  },
                  {
                    text: "View Product",
                    link: "/software-docs/activity/view-product/view-product",
                  },
                  {
                    text: "View Product Reviews",
                    link: "/software-docs/activity/view-product/view-product-reviews",
                  },
                  {
                    text: "View Suggested Product",
                    link: "/software-docs/activity/view-product/view-suggested-product",
                  },
                ],
              },
              {
                text: "View Shop Report",
                collapsed: true,
                items: [
                  {
                    text: "View Shop Report",
                    link: "/software-docs/activity/view-shop-report/view-shop-report",
                  },
                ],
              },
              {
                text: "View Staff Self Report",
                collapsed: true,
                items: [
                  {
                    text: "View Staff Self Report",
                    link: "/software-docs/activity/view-staff-self-report/view-staff-self-report",
                  },
                ],
              },
              {
                text: "View System Monitoring",
                collapsed: true,
                items: [
                  {
                    text: "View System Monitoring",
                    link: "/software-docs/activity/view-system-monitoring/view-system-monitoring",
                  },
                ],
              },
            ],
          },
          {
            text: "Function Lists",
            link: "/software-docs/function-list",
          },
          {
            text: "Class",
            link: "/software-docs/class",
          },
          {
            text: "State",
            collapsed: true,
            items: [
              {
                text: "Cart Item",
                link: "/software-docs/state/cart-item",
              },
              {
                text: "Cart",
                link: "/software-docs/state/cart",
              },
              {
                text: "Order Item",
                link: "/software-docs/state/order-item",
              },
              {
                text: "Order",
                link: "/software-docs/state/order",
              },
              {
                text: "Payment",
                link: "/software-docs/state/payment",
              },
              {
                text: "Product Image",
                link: "/software-docs/state/product-image",
              },
              {
                text: "Product",
                link: "/software-docs/state/product",
              },
              {
                text: "Product Variant",
                link: "/software-docs/state/product-variant",
              },
              {
                text: "Refund",
                link: "/software-docs/state/refund",
              },
              {
                text: "Return Request",
                link: "/software-docs/state/return-request",
              },
              {
                text: "Review",
                link: "/software-docs/state/review",
              },
              {
                text: "User",
                link: "/software-docs/state/user",
              },
            ],
          },
          {
            text: "Estimate",
            collapsed: true,
            items: [
              {
                text: "Time Implementing",
                link: "/software-docs/estimate/time-implementing",
              },
            ],
          },
          {
            text: "SRS",
            link: "/software-docs/srs",
          },
          {
            text: "Database",
            link: "/software-docs/database",
          },
          {
            text: "Test",
            collapsed: true,
            items: [
              {
                text: "Test Plan",
                link: "/software-docs/test/test-plan",
              },
            ],
          },
        ],
      },
      {
        text: "Extra Docs",
        items: [
          {
            text: "Module Group",
            link: "/extra-docs/module-group",
          },
          {
            text: "Test",
            collapsed: true,
            items: [
              {
                text: "Test cases",
                link: "/extra-docs/test/test-case.md",
              },
            ],
          },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern:
        "https://github.com/electricilies/electricilies.github.io/edit/main/docs/:path",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/electricilies",
      },
    ],
  },
});
