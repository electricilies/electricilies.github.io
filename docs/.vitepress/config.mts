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
      { text: "Docs", link: "/docs" },
    ],

    sidebar: [
      {
        text: "Overview",
        items: [{ text: "Overview", link: "/overview" }],
      },
      {
        text: "Docs",
        items: [
          {
            text: "User Story",
            link: "/docs/user-story",
          },
          {
            text: "Use Case",
            collapsed: true,
            items: [
              {
                text: "Generic",
                link: "/docs/use-case/generic",
              },
              {
                text: "User",
                link: "/docs/use-case/user",
              },
              {
                text: "Customer",
                link: "/docs/use-case/customer",
              },
              {
                text: "Staff",
                link: "/docs/use-case/staff",
              },
              {
                text: "Admin",
                link: "/docs/use-case/admin",
              },
            ],
          },
          {
            text: "Sequence",
            collapsed: true,
            items: [
              {
                text: "Adjust Document",
                collapsed: true,
                items: [
                  {
                    text: "Adjust Document",
                    link: "/docs/sequence/adjust-document/adjust-document",
                  },
                  {
                    text: "Create Document",
                    link: "/docs/sequence/adjust-document/create-document",
                  },
                  {
                    text: "Delete Document",
                    link: "/docs/sequence/adjust-document/delete-document",
                  },
                  {
                    text: "Search Document",
                    link: "/docs/sequence/adjust-document/search-document",
                  },
                  {
                    text: "Update Document",
                    link: "/docs/sequence/adjust-document/update-document",
                  },
                ],
              },
              {
                text: "Contact Support",
                collapsed: true,
                items: [
                  {
                    text: "Contact Support",
                    link: "/docs/sequence/contact-support/contact-support",
                  },
                ],
              },
              {
                text: "Manage Account",
                collapsed: true,
                items: [
                  {
                    text: "Delete Account",
                    link: "/docs/sequence/manage-account/delete-account",
                  },
                  {
                    text: "Edit Profile",
                    link: "/docs/sequence/manage-account/edit-profile",
                  },
                  {
                    text: "Link Account with Third Party",
                    link: "/docs/sequence/manage-account/link-account-with-third-party",
                  },
                  {
                    text: "Manage Account",
                    link: "/docs/sequence/manage-account/manage-account",
                  },
                  {
                    text: "Recover Account",
                    link: "/docs/sequence/manage-account/recover-account",
                  },
                  {
                    text: "Reset Password",
                    link: "/docs/sequence/manage-account/reset-password",
                  },
                  {
                    text: "Sign In",
                    link: "/docs/sequence/manage-account/sign-in",
                  },
                  {
                    text: "Sign Out",
                    link: "/docs/sequence/manage-account/sign-out",
                  },
                  {
                    text: "Sign Up",
                    link: "/docs/sequence/manage-account/sign-up",
                  },
                ],
              },
              {
                text: "Manage Cart",
                collapsed: true,
                items: [
                  {
                    text: "Change Product Amount",
                    link: "/docs/sequence/manage-cart/change-product-amount",
                  },
                  {
                    text: "Manage Cart",
                    link: "/docs/sequence/manage-cart/manage-cart",
                  },
                  {
                    text: "Purchase",
                    link: "/docs/sequence/manage-cart/purchase",
                  },
                  {
                    text: "Remove Product From Cart",
                    link: "/docs/sequence/manage-cart/remove-product-from-cart",
                  },
                ],
              },
              {
                text: "Manage Product",
                collapsed: true,
                items: [
                  {
                    text: "Add Product",
                    link: "/docs/sequence/manage-product/add-product",
                  },
                  {
                    text: "Delete Product",
                    link: "/docs/sequence/manage-product/delete-product",
                  },
                  {
                    text: "Delete Review",
                    link: "/docs/sequence/manage-product/delete-review",
                  },
                  {
                    text: "Manage Product",
                    link: "/docs/sequence/manage-product/manage-product",
                  },
                  {
                    text: "Search Product",
                    link: "/docs/sequence/manage-product/search-product",
                  },
                  {
                    text: "Update Product",
                    link: "/docs/sequence/manage-product/update-product",
                  },
                ],
              },
              {
                text: "Manage User",
                collapsed: true,
                items: [
                  {
                    text: "Change User Roles",
                    link: "/docs/sequence/manage-user/change-user-roles",
                  },
                  {
                    text: "Delete User",
                    link: "/docs/sequence/manage-user/delete-user",
                  },
                  {
                    text: "Manage User",
                    link: "/docs/sequence/manage-user/manage-user",
                  },
                  {
                    text: "Search User",
                    link: "/docs/sequence/manage-user/search-user",
                  },
                  {
                    text: "View Customer Report",
                    link: "/docs/sequence/manage-user/view-customer-report",
                  },
                  {
                    text: "View Staff Report",
                    link: "/docs/sequence/manage-user/view-staff-report",
                  },
                ],
              },
              {
                text: "View Customer Self Report",
                collapsed: true,
                items: [
                  {
                    text: "View Customer Self Report",
                    link: "/docs/sequence/view-customer-self-report/view-customer-self-report",
                  },
                ],
              },
              {
                text: "View Document",
                collapsed: true,
                items: [
                  {
                    text: "View Document",
                    link: "/docs/sequence/view-document/view-document",
                  },
                ],
              },
              {
                text: "View Order",
                collapsed: true,
                items: [
                  {
                    text: "Cancel Order",
                    link: "/docs/sequence/view-order/cancel-order",
                  },
                  {
                    text: "Return Product",
                    link: "/docs/sequence/view-order/return-product",
                  },
                  {
                    text: "Review Product",
                    link: "/docs/sequence/view-order/review-product",
                  },
                  {
                    text: "Search Order",
                    link: "/docs/sequence/view-order/search-order",
                  },
                  {
                    text: "View Order Detail",
                    link: "/docs/sequence/view-order/view-order-detail",
                  },
                  {
                    text: "View Order",
                    link: "/docs/sequence/view-order/view-order",
                  },
                ],
              },
              {
                text: "View Product",
                collapsed: true,
                items: [
                  {
                    text: "Add Product To Cart",
                    link: "/docs/sequence/view-product/add-product-to-cart",
                  },
                  {
                    text: "Search Product",
                    link: "/docs/sequence/view-product/search-product",
                  },
                  {
                    text: "View Product Detail",
                    link: "/docs/sequence/view-product/view-product-detail",
                  },
                  {
                    text: "View Product",
                    link: "/docs/sequence/view-product/view-product",
                  },
                  {
                    text: "View Product Reviews",
                    link: "/docs/sequence/view-product/view-product-reviews",
                  },
                  {
                    text: "View Suggested Product",
                    link: "/docs/sequence/view-product/view-suggested-product",
                  },
                ],
              },
              {
                text: "View Shop Report",
                collapsed: true,
                items: [
                  {
                    text: "View Shop Report",
                    link: "/docs/sequence/view-shop-report/view-shop-report",
                  },
                ],
              },
              {
                text: "View Staff Self Report",
                collapsed: true,
                items: [
                  {
                    text: "View Staff Self Report",
                    link: "/docs/sequence/view-staff-self-report/view-staff-self-report",
                  },
                ],
              },
              {
                text: "View System Monitoring",
                collapsed: true,
                items: [
                  {
                    text: "View System Monitoring",
                    link: "/docs/sequence/view-system-monitoring/view-system-monitoring",
                  },
                ],
              },
            ],
          },
          {
            text: "Activity",
            collapsed: true,
            items: [
              {
                text: "Adjust Document",
                collapsed: true,
                items: [
                  {
                    text: "Adjust Document",
                    link: "/docs/activity/adjust-document/adjust-document",
                  },
                  {
                    text: "Create Document",
                    link: "/docs/activity/adjust-document/create-document",
                  },
                  {
                    text: "Delete Document",
                    link: "/docs/activity/adjust-document/delete-document",
                  },
                  {
                    text: "Search Document",
                    link: "/docs/activity/adjust-document/search-document",
                  },
                  {
                    text: "Update Document",
                    link: "/docs/activity/adjust-document/update-document",
                  },
                ],
              },
              {
                text: "Contact Support",
                collapsed: true,
                items: [
                  {
                    text: "Contact Support",
                    link: "/docs/activity/contact-support/contact-support",
                  },
                ],
              },
              {
                text: "Manage Account",
                collapsed: true,
                items: [
                  {
                    text: "Delete Account",
                    link: "/docs/activity/manage-account/delete-account",
                  },
                  {
                    text: "Edit Profile",
                    link: "/docs/activity/manage-account/edit-profile",
                  },
                  {
                    text: "Link Account with Third Party",
                    link: "/docs/activity/manage-account/link-account-with-third-party",
                  },
                  {
                    text: "Manage Account",
                    link: "/docs/activity/manage-account/manage-account",
                  },
                  {
                    text: "Recover Account",
                    link: "/docs/activity/manage-account/recover-account",
                  },
                  {
                    text: "Reset Password",
                    link: "/docs/activity/manage-account/reset-password",
                  },
                  {
                    text: "Sign In",
                    link: "/docs/activity/manage-account/sign-in",
                  },
                  {
                    text: "Sign Out",
                    link: "/docs/activity/manage-account/sign-out",
                  },
                  {
                    text: "Sign Up",
                    link: "/docs/activity/manage-account/sign-up",
                  },
                ],
              },
              {
                text: "Manage Cart",
                collapsed: true,
                items: [
                  {
                    text: "Change Product Amount",
                    link: "/docs/activity/manage-cart/change-product-amount",
                  },
                  {
                    text: "Manage Cart",
                    link: "/docs/activity/manage-cart/manage-cart",
                  },
                  {
                    text: "Purchase",
                    link: "/docs/activity/manage-cart/purchase",
                  },
                  {
                    text: "Remove Product From Cart",
                    link: "/docs/activity/manage-cart/remove-product-from-cart",
                  },
                ],
              },
              {
                text: "Manage Product",
                collapsed: true,
                items: [
                  {
                    text: "Add Product",
                    link: "/docs/activity/manage-product/add-product",
                  },
                  {
                    text: "Delete Product",
                    link: "/docs/activity/manage-product/delete-product",
                  },
                  {
                    text: "Delete Review",
                    link: "/docs/activity/manage-product/delete-review",
                  },
                  {
                    text: "Manage Product",
                    link: "/docs/activity/manage-product/manage-product",
                  },
                  {
                    text: "Search Product",
                    link: "/docs/activity/manage-product/search-product",
                  },
                  {
                    text: "Update Product",
                    link: "/docs/activity/manage-product/update-product",
                  },
                ],
              },
              {
                text: "Manage User",
                collapsed: true,
                items: [
                  {
                    text: "Change User Roles",
                    link: "/docs/activity/manage-user/change-user-roles",
                  },
                  {
                    text: "Delete User",
                    link: "/docs/activity/manage-user/delete-user",
                  },
                  {
                    text: "Manage User",
                    link: "/docs/activity/manage-user/manage-user",
                  },
                  {
                    text: "Search User",
                    link: "/docs/activity/manage-user/search-user",
                  },
                  {
                    text: "View Customer Report",
                    link: "/docs/activity/manage-user/view-customer-report",
                  },
                  {
                    text: "View Staff Report",
                    link: "/docs/activity/manage-user/view-staff-report",
                  },
                ],
              },
              {
                text: "View Customer Self Report",
                collapsed: true,
                items: [
                  {
                    text: "View Customer Self Report",
                    link: "/docs/activity/view-customer-self-report/view-customer-self-report",
                  },
                ],
              },
              {
                text: "View Document",
                collapsed: true,
                items: [
                  {
                    text: "View Document",
                    link: "/docs/activity/view-document/view-document",
                  },
                ],
              },
              {
                text: "View Order",
                collapsed: true,
                items: [
                  {
                    text: "Cancel Order",
                    link: "/docs/activity/view-order/cancel-order",
                  },
                  {
                    text: "Return Product",
                    link: "/docs/activity/view-order/return-product",
                  },
                  {
                    text: "Review Product",
                    link: "/docs/activity/view-order/review-product",
                  },
                  {
                    text: "Search Order",
                    link: "/docs/activity/view-order/search-order",
                  },
                  {
                    text: "View Order Detail",
                    link: "/docs/activity/view-order/view-order-detail",
                  },
                  {
                    text: "View Order",
                    link: "/docs/activity/view-order/view-order",
                  },
                ],
              },
              {
                text: "View Product",
                collapsed: true,
                items: [
                  {
                    text: "Add Product To Cart",
                    link: "/docs/activity/view-product/add-product-to-cart",
                  },
                  {
                    text: "Search Product",
                    link: "/docs/activity/view-product/search-product",
                  },
                  {
                    text: "View Product Detail",
                    link: "/docs/activity/view-product/view-product-detail",
                  },
                  {
                    text: "View Product",
                    link: "/docs/activity/view-product/view-product",
                  },
                  {
                    text: "View Product Reviews",
                    link: "/docs/activity/view-product/view-product-reviews",
                  },
                  {
                    text: "View Suggested Product",
                    link: "/docs/activity/view-product/view-suggested-product",
                  },
                ],
              },
              {
                text: "View Shop Report",
                collapsed: true,
                items: [
                  {
                    text: "View Shop Report",
                    link: "/docs/activity/view-shop-report/view-shop-report",
                  },
                ],
              },
              {
                text: "View Staff Self Report",
                collapsed: true,
                items: [
                  {
                    text: "View Staff Self Report",
                    link: "/docs/activity/view-staff-self-report/view-staff-self-report",
                  },
                ],
              },
              {
                text: "View System Monitoring",
                collapsed: true,
                items: [
                  {
                    text: "View System Monitoring",
                    link: "/docs/activity/view-system-monitoring/view-system-monitoring",
                  },
                ],
              },
            ],
          },
          {
            text: "Database",
            link: "/docs/database",
          },
          {
            text: "Function Lists",
            link: "/docs/function-list",
          },
          {
            text: "SRS",
            link: "/docs/srs",
          },
          {
            text: "Module group",
            link: "/docs/module-group",
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
