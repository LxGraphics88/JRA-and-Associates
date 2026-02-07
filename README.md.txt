# J.R.A. & Associates Landing Page

A modern, mobile-responsive landing page created for J.R.A. & Associates Real Estate. 

## 🚀 How to Deploy on GitHub Pages
1. Create a new repository on GitHub named `jra-associates`.
2. Upload the `index.html`, `style.css`, and `script.js` files to the repository.
3. Go to **Settings** > **Pages**.
4. Under "Build and deployment", set the source to **Deploy from a branch** and select `main` (or `master`).
5. Click Save. Your site will be live at `https://yourusername.github.io/jra-associates/`.

## 🎨 How to Customize
- **Logo/Name:** Open `index.html` and search for "J.R.A.". Change the text inside the `.logo` div.
- **Colors:** Open `style.css` and look for the `:root` section at the top. You can change the hex codes for `--primary-gradient` to adjust the blue theme.
- **Background Image:** In `style.css`, under `.hero`, replace the Unsplash URL with a link to a professional photo of your own listings.
- **Reviews:** The reviews are located in the `#testimonials` section of `index.html`. You can easily swap the text inside the `.review-card` divs.
- **Icons:** This site uses **Lucide Icons**. You can find more icons at [lucide.dev](https://lucide.dev) and simply change the `data-lucide` attribute name in the HTML.

## 🛠 Tech Stack
- HTML5
- CSS3 (Flexbox/Grid)
- JavaScript (ES6)
- Lucide Icons (CDN)
- Google Fonts (Inter)