---@module 'lazy'
---@type LazySpec
return {
  {
    "olimorris/codecompanion.nvim",
    opts = {
      rules = {
        ["refactor Sequence"] = {
          description = "Refactor",
          files = {
            "./.rules/01-rules.md",
            "./.rules/20-sequence-rules.md",
            "./.rules/refactor/sequence.md",
          },
        },
        ["Refactor Activity"] = {
          description = "Refactor",
          files = {
            "./.rules/01-rules.md",
            "./.rules/21-activity-rules.md",
            "./.rules/refactor/activity.md",
          },
        },
        ["Re Generate SRS"] = {
          description = "Generate Software Requirements Specification",
          files = {
            "./.rules/01-rules.md",
            "./.rules/22-srs.md",
            "./.rules/23-srs-bestpractice.md",
            "./docs/software-docs/database/index.md",
            "./docs/software-docs/srs/index-old.md",
          },
        },
      },
    },
    optional = true,
  },
}
