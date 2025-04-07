# GitHub Deployment Instructions for AI Hub Station

This document provides step-by-step instructions for deploying the AI Hub Station community website using GitHub and Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (can be created with your GitHub account)
3. The AI Hub Station project files

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "ai-hub-station")
4. Choose whether to make it public or private
5. Click "Create repository"

## Step 2: Push Your Code to GitHub

From your local project directory, run the following commands:

```bash
# Initialize git repository (if not already done)
git init

# Add all files to git
git add .

# Commit the files
git commit -m "Initial commit"

# Add the remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/ai-hub-station.git

# Push the code to GitHub
git push -u origin main
```

Note: Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy with Vercel

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
2. Click "New Project"
3. Import your "ai-hub-station" repository
4. Configure your project:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Environment Variables: Add your Supabase URL and anon key
     - `REACT_APP_SUPABASE_URL`: https://wxzobzamheiqkeoqkacn.supabase.co
     - `REACT_APP_SUPABASE_ANON_KEY`: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4em9iemFtaGVpcWtlb3FrYWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5Nzg3MzcsImV4cCI6MjA1OTU1NDczN30.QwA6JyXazZjwNU2jbtq0_HyDfMmNw-I_usAUeOlQJXA
5. Click "Deploy"

Vercel will automatically build and deploy your application. Once complete, you'll receive a URL where your site is live.

## Step 4: Set Up Automatic Deployments

With the GitHub and Vercel integration, any changes pushed to your main branch will automatically trigger a new deployment. To make changes:

1. Make your changes locally
2. Commit them to git:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Vercel will automatically detect the changes and deploy a new version

## Step 5: Custom Domain (Optional)

If you want to use a custom domain:

1. In your Vercel dashboard, go to your project
2. Click on "Settings" > "Domains"
3. Add your custom domain and follow the instructions to configure DNS settings

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in Vercel for specific errors
2. Ensure all environment variables are correctly set
3. Verify that your Supabase project is properly configured and accessible
4. Check that your repository contains all necessary files

## Local Development After GitHub Setup

To continue development after setting up GitHub:

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-hub-station.git
   ```
2. Install dependencies:
   ```bash
   cd ai-hub-station
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Additional Resources

- [GitHub Documentation](https://docs.github.com)
- [Vercel Documentation](https://vercel.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Supabase Documentation](https://supabase.io/docs)
