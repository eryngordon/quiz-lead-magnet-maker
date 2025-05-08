
# GitHub Pages Deployment Setup

The necessary packages are already installed in this project. Here's how to deploy:

## Important: Fix package.json First

Before deploying, make sure your package.json file is correctly formatted:

1. Open your package.json file
2. Ensure it includes these properties at the top level:
   ```json
   "homepage": "https://[your-github-username].github.io/[your-repo-name]/",
   ```
3. Ensure your scripts section includes:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

## Deployment Steps

1. **Push your code to GitHub**:
   - Create a repository on GitHub if you haven't already
   - Push your code to the main branch

2. **Run the deployment command**:
   ```bash
   npm run deploy
   ```
   
   This command will:
   - Build your application
   - Push the built files to the gh-pages branch on GitHub

3. **Enable GitHub Pages in your repository settings**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Navigate to the "Pages" section in the sidebar
   - Under "Source", select "Deploy from a branch"
   - Select "gh-pages" as the branch (or "main" if gh-pages isn't available)
   - Click "Save"

4. **Access your deployed site**:
   Your site will be published at: `https://[your-github-username].github.io/[your-repo-name]/`

## Embedding in WordPress

After deployment, add this iframe to your WordPress page:

```html
<iframe 
  src="https://[your-github-username].github.io/[your-repo-name]/" 
  width="100%" 
  height="800px" 
  frameborder="0" 
  style="border:none; overflow:hidden;"
></iframe>
```

You can adjust the height as needed for your quiz layout.

## Troubleshooting

- If you see a blank page, check browser console for path errors
- Make sure all image paths use relative URLs
- Verify your repository name is correctly set in the homepage URL
