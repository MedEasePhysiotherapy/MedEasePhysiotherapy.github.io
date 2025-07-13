# GitHub Pages Deployment Guide

Follow these steps to deploy your MedEase Physiotherapy website to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "New" button or go to [Create a new repository](https://github.com/new)
3. Name your repository (e.g., "medease-physiotherapy")
4. Make sure it's set to "Public" (required for free GitHub Pages)
5. Click "Create repository"

## Step 2: Upload Your Files

### Option A: Using GitHub Web Interface
1. Click "uploading an existing file" or "Add file" → "Upload files"
2. Drag and drop all your website files and folders
3. Write a commit message like "Initial website upload"
4. Click "Commit changes"

### Option B: Using Git Command Line
```bash
git clone https://github.com/yourusername/medease-physiotherapy.git
cd medease-physiotherapy
# Copy all your website files to this directory
git add .
git commit -m "Initial website upload"
git push origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

## Step 4: Access Your Live Website

- Your website will be available at: `https://yourusername.github.io/medease-physiotherapy`
- It may take a few minutes for the site to be live
- GitHub will show you the URL in the Pages settings

## Step 5: Add Your Images

1. Create an "images" folder in your repository
2. Upload all the required images (see image-setup-instructions.html)
3. The images should be:
   - `logo.jpg` - MedEase logo
   - `hero-image.jpg` - Main hero image
   - `dr-nishtha.jpg` - Doctor's photo
   - `orthopedic-rehab.jpg` - Orthopedic service image
   - `cardiopulmonary-rehab.jpg` - Cardiopulmonary service image
   - `post-surgical-recovery.jpg` - Post-surgical service image
   - `home-visits.png` - Home visits image

## Step 6: Update Your Website

To make changes to your website:

1. Edit the files in your repository
2. Commit the changes
3. The website will automatically update within a few minutes

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a file named `CNAME` to your repository root
2. Put your domain name in the file (e.g., `medease.yourname.com`)
3. Configure your domain's DNS settings to point to GitHub Pages

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure your main file is named `index.html`
2. **Images not loading**: Check that image paths are correct and files exist
3. **CSS not loading**: Verify CSS file paths are correct
4. **Site not updating**: Clear browser cache or wait a few minutes

### File Structure Check:

Make sure your repository has this structure:
```
/
├── index.html (main homepage)
├── services.html
├── team.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (all your images)
├── services/
│   └── (service detail pages)
└── team/
    └── (team detail pages)
```

## Tips for Success

1. **Test locally first**: Open `index.html` in your browser to test before uploading
2. **Use relative paths**: All links should use relative paths (e.g., `./css/style.css`)
3. **Optimize images**: Compress images to reduce loading time
4. **Mobile testing**: Test on mobile devices once deployed

## Security Note

Never commit sensitive information like API keys or passwords to your repository. This website uses only client-side code, so it's safe for public repositories.

## Support

If you encounter issues:
1. Check the GitHub Pages documentation
2. Review the repository settings
3. Ensure all file paths are correct
4. Test the website locally first

Your MedEase Physiotherapy website should now be live and accessible to the world!
