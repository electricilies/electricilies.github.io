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
      },
    },
    optional = true,
  },
}
