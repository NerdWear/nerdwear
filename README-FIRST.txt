NERDWEAR.NET FULL SITE — BUILD PACKAGE

WHAT THIS PACKAGE IS
This is the complete static NerdWear.net replacement website. It is designed for GitHub Pages and for local desktop testing before deployment.


SITE CONTENT
- Home
- Expressions hub
- 20 individual Expression pages
- Hat Styles & Colors
- Wear What You Know
- Our Story
- What's Next
- FAQ
- Contact
- Privacy Policy
- Terms of Use
- Custom 404 page
- robots.txt, sitemap.xml, CNAME, .nojekyll, and the master stylesheet

IMPORTANT: KEEP YOUR EXISTING /images/ DIRECTORY
The package intentionally does not duplicate your image library. Every website image reference is relative and points to the exact folder/file structure documented in your NerdWear image tree. Place these files in the same website root that contains your existing /images/ folder.

LOCAL TESTING
1. Copy this package into your local NerdWear website folder alongside /images/.
2. Double-click index.html for ordinary layout/navigation testing.
3. All internal pages, CSS, and image links are relative, so the site is portable.
4. The Brevo form uses external Brevo and Google reCAPTCHA services. reCAPTCHA may not authorize file:// or localhost even though the page otherwise displays correctly. Final form testing should be performed on nerdwear.net after deployment or on an authorized preview host.

DEPLOYMENT
Upload the site files/folders to the repository root used by GitHub Pages, while preserving the existing /images/ directory exactly. Keep the included CNAME file (nerdwear.net) and .nojekyll file in the repository root; they help preserve the custom-domain/static-site setup when you replace the old site files.

INTENTIONALLY ABSOLUTE URLS
The Shopify SHOP link, X account link, canonical tags, sitemap URLs, Brevo endpoints, and reCAPTCHA/Brevo external scripts must be absolute. Website assets, internal navigation, and product images are relative.

NO GENERAL-PURPOSE JAVASCRIPT
The site is intentionally HTML + CSS. The only JavaScript loaded is required by the Brevo subscription form and Google reCAPTCHA.

SHOPIFY
Every SHOP call-to-action points to the same destination: https://shop.nerdwear.net/ . NerdWear.net does not hard-code individual Shopify collection or product URLs. Shopify handles the catalog, filters, variants, checkout, returns, and transaction policies.

CONTACT
At launch the contact page directs visitors to @NerdWearUSA on X. No public email address or nonfunctional contact form has been published.

BREVO
The existing Brevo action URL, reCAPTCHA site key, validation logic, scripts, and typed-email color fix were retained. Launch-era copy was updated to say new Expressions/releases instead of “when NerdWear launches.”

LEGAL
FAQ, Privacy, and Terms pages are included. They cover the current static site setup, Brevo/reCAPTCHA, external Shopify store, X, and product previews. Review them if the site's services change.
