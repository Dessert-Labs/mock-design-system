# mock-design-system

Mock design system repository for Clafoutis E2E testing.

This repo demonstrates the **producer** workflow:
- Design tokens defined in `tokens/`
- Generated outputs in `build/` (Tailwind, Figma, custom SCSS)
- Automatic GitHub Releases via workflow

## Usage

```bash
# Install dependencies
npm install

# Generate token outputs
npm run generate
# or
npx clafoutis generate
```

## Structure

```
├── .clafoutis/producer.json    # Clafoutis configuration
├── .github/workflows/          # Auto-release workflow
├── generators/
│   └── custom-scss.ts          # Custom generator plugin
├── tokens/
│   ├── colors/primitives.json
│   ├── colors/primitives.dark.json
│   ├── spacing/primitives.json
│   └── typography/primitives.json
└── build/                      # Generated outputs
```

## Releases

Releases are created automatically when tokens change on main branch.
Each release includes:
- `tailwind.base.css`, `tailwind.dark.css`, `tailwind.index.css`
- `tailwind.tailwind.base.js`, `tailwind.tailwind.config.js`
- `figma.variables.json`
- `brand-scss.custom._brand.scss`
