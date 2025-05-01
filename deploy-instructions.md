# GitHub Pages Deployment Setup

Add these scripts to your package.json:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## Deployment Steps

1. Push your code to a GitHub repository
2. Run `npm run deploy`
3. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "GitHub Pages"
   - Select "gh-pages branch" as source
   - Save

Your site will be published at: https://[your-github-username].github.io/[repository-name]/

## Embedding in WordPress

After deployment, add this iframe to your WordPress page:

```html
<iframe 
  src="https://[your-github-username].github.io/[repository-name]/" 
  width="100%" 
  height="800px" 
  frameborder="0" 
  style="border:none; overflow:hidden;"
></iframe>
```

You can adjust the height as needed for your quiz layout.
