# 🍳 Smart Cook

A React app that suggests recipes based on ingredients you have on hand, powered by the Anthropic Claude AI.

## Demo

Add your ingredients, hit **Get a recipe**, and Smart Cook will suggest a dish you can make — formatted and ready to follow.

Live Demo: https://smartcook801.netlify.app/

## Features

- Add ingredients to your list one at a time
- Once you have more than 3 ingredients, a **Get a recipe** button appears
- Claude AI generates a recipe using your ingredients (plus a few extras if needed)
- Recipe is rendered as formatted markdown for easy reading

## Tech Stack

- **React** — UI and state management
- **Anthropic SDK** — Claude AI API (`claude-haiku-4-5-20251001`)
- **marked** — Markdown rendering


## Getting Started

### Prerequisites

- Node.js
- An [Anthropic API key](https://console.anthropic.com/)

### Installation

```bash
git clone https://github.com/your-username/chef-claude.git
cd chef-claude
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```
ANTHROPIC_API_KEY=your_api_key_here
```

### Run

```bash
npm run dev
```

## How It Works

1. The user adds ingredients via the input form in `Main.jsx`
2. `IngredientsList` renders the current ingredients and shows the **Get a recipe** button once there are more than 3
3. On click, `getRecipe()` in `Main.jsx` calls `getRecipeFromChefClaude()` from `ai.js`
4. The Anthropic API returns a markdown-formatted recipe
5. `ClaudeRecipe` renders the markdown as HTML using `marked`

## Notes

- `dangerouslySetInnerHTML` is used in `ClaudeRecipe` to render the markdown output from `marked`. This is safe here since the content comes from the Claude API, not user input.
- The API key is exposed client-side via `dangerouslyAllowBrowser: true` — this is fine for learning/demo purposes but should be handled server-side in production.