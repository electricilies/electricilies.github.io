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
            text: "Database",
            link: "/docs/database",
          },
          {
            text: "Use Case",
            collapsed: true,
            items: [
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
                ],
              },
              {
                text: "Auth",
                collapsed: true,
                items: [
                  { text: "Sign In", link: "/docs/sequence/auth/sign-in" },
                  { text: "Sign Up", link: "/docs/sequence/auth/sign-up" },
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
                    text: "Add Comment To Review",
                    link: "/docs/sequence/manage-product/add-comment-to-review",
                  },
                  {
                    text: "Add Product",
                    link: "/docs/sequence/manage-product/add-product",
                  },
                  {
                    text: "Change Product Detail",
                    link: "/docs/sequence/manage-product/change-product-detail",
                  },
                  {
                    text: "Change Product Preview",
                    link: "/docs/sequence/manage-product/change-product-preview",
                  },
                  {
                    text: "Change Product Price",
                    link: "/docs/sequence/manage-product/change-product-price",
                  },
                  {
                    text: "Remove Product",
                    link: "/docs/sequence/manage-product/remove-product",
                  },
                  {
                    text: "Manage Product",
                    link: "/docs/sequence/manage-product/manage-product",
                  },
                  {
                    text: "Remove Review Or Comment",
                    link: "/docs/sequence/manage-product/remove-review-or-comment",
                  },
                  {
                    text: "Search Product",
                    link: "/docs/sequence/manage-product/search-product",
                  },
                ],
              },
              {
                text: "Manage User",
                collapsed: true,
                items: [
                  {
                    text: "Demote Admin",
                    link: "/docs/sequence/manage-user/demote-admin",
                  },
                  {
                    text: "Demote Staff",
                    link: "/docs/sequence/manage-user/demote-staff",
                  },
                  {
                    text: "Manage User",
                    link: "/docs/sequence/manage-user/manage-user",
                  },
                  {
                    text: "Promote Customer",
                    link: "/docs/sequence/manage-user/promote-customer",
                  },
                  {
                    text: "Promote Staff",
                    link: "/docs/sequence/manage-user/promote-staff",
                  },
                  {
                    text: "Remove Customer",
                    link: "/docs/sequence/manage-user/remove-customer",
                  },
                  {
                    text: "Remove Staff",
                    link: "/docs/sequence/manage-user/remove-staff",
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
                    text: "Add Comment To Review",
                    link: "/docs/sequence/view-product/add-comment-to-review",
                  },
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
                    text: "View Product Reviews Comments",
                    link: "/docs/sequence/view-product/view-product-reviews-comments",
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
                ],
              },
              {
                text: "Auth",
                collapsed: true,
                items: [
                  { text: "Sign In", link: "/docs/activity/auth/sign-in" },
                  { text: "Sign Up", link: "/docs/activity/auth/sign-up" },
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
                    text: "Add Comment To Review",
                    link: "/docs/activity/manage-product/add-comment-to-review",
                  },
                  {
                    text: "Add Product",
                    link: "/docs/activity/manage-product/add-product",
                  },
                  {
                    text: "Change Product Detail",
                    link: "/docs/activity/manage-product/change-product-detail",
                  },
                  {
                    text: "Remove Product",
                    link: "/docs/activity/manage-product/remove-product",
                  },
                  {
                    text: "Manage Product",
                    link: "/docs/activity/manage-product/manage-product",
                  },
                  {
                    text: "Remove Review Or Comment",
                    link: "/docs/activity/manage-product/remove-review-or-comment",
                  },
                  {
                    text: "Search Product",
                    link: "/docs/activity/manage-product/search-product",
                  },
                ],
              },
              {
                text: "Manage User",
                collapsed: true,
                items: [
                  {
                    text: "Demote Admin",
                    link: "/docs/activity/manage-user/demote-admin",
                  },
                  {
                    text: "Demote Staff",
                    link: "/docs/activity/manage-user/demote-staff",
                  },
                  {
                    text: "Manage User",
                    link: "/docs/activity/manage-user/manage-user",
                  },
                  {
                    text: "Promote Customer",
                    link: "/docs/activity/manage-user/promote-customer",
                  },
                  {
                    text: "Promote Staff",
                    link: "/docs/activity/manage-user/promote-staff",
                  },
                  {
                    text: "Remove Customer",
                    link: "/docs/activity/manage-user/remove-customer",
                  },
                  {
                    text: "Remove Staff",
                    link: "/docs/activity/manage-user/remove-staff",
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
                    text: "Add Comment To Review",
                    link: "/docs/activity/view-product/add-comment-to-review",
                  },
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
                    text: "View Product Reviews Comments",
                    link: "/docs/activity/view-product/view-product-reviews-comments",
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
        ],
      },
    ],

    search: {
      provider: "local",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/electricilies",
      },
    ],
  },
});
