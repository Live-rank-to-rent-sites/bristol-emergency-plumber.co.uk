# Bristol Emergency Plumber - Comprehensive Website Audit Report

**Date:** 14 February 2026
**Audited by:** Claude Code
**Domain:** bristolemergencyplumber.co.uk
**Technology:** Static HTML/CSS + Cloudflare Pages Functions
**Total Pages:** 20 HTML files (14 indexed, 4 noindex legal, 1 admin, 1 error)

---

## 1. TECHNICAL AUDIT

### 1.1 Performance - GOOD (8/10)

**Strengths:**
- Critical CSS inlined in every page for fast first paint
- Non-critical CSS loaded asynchronously via `preload` + `onload` pattern
- WebP image format used throughout (modern, compressed)
- Hero image preloaded on homepage and locations index
- No external JS frameworks - vanilla JavaScript only
- No render-blocking scripts (all JS at bottom of `<body>`)
- System font stack (`-apple-system, BlinkMacSystemFont...`) eliminates font loading
- Images use `loading="lazy"` and `decoding="async"` on location cards
- Total image payload ~370KB across all images

**Issues Found:**
| # | Issue | Severity | Pages Affected |
|---|-------|----------|----------------|
| T1 | **Duplicate inline CSS** - The same ~2-3KB of critical CSS is repeated on every page, adding unnecessary bytes. Should be extracted to a shared inline snippet or build step. | Low | All 20 pages |
| T2 | **No `<link rel="preconnect">` for Google Maps** - The contact page and location pages embed Google Maps iframes without preconnecting to `maps.googleapis.com` | Medium | contact.html, locations/*.html |
| T3 | **Missing `width` and `height` on hero background images** - Hero images are CSS backgrounds, which can't have intrinsic dimensions. No CLS issue since they're overlay backgrounds, but the hero section lacks explicit `min-height` causing layout shift during load | Low | index.html |
| T4 | **`document.write()` used for copyright year** - Used in all pages' footer. While functional, search engines may not execute this JS, showing no year. Should use server-side or static date. | Low | All pages |
| T5 | **No resource hints for API endpoint** - The lead capture form sends to `/api/leads` but there's no `dns-prefetch` or `preconnect` for the serverless function origin | Low | index.html, contact.html |

### 1.2 Structured Data - EXCELLENT (9/10)

**Strengths:**
- Homepage has `Plumber` schema (LocalBusiness subtype) with full NAP data
- Homepage has `WebSite` schema with publisher reference
- Homepage has `FAQPage` schema matching visible FAQ content
- All 4 service pages have `Service` schema + `BreadcrumbList` schema
- About page has `Organization` schema with `foundingDate`, `contactPoint`, `knowsAbout`
- All 5 location pages have `Service` schema with `areaServed` arrays
- `AggregateRating` included on homepage schema

**Issues Found:**
| # | Issue | Severity | Pages Affected |
|---|-------|----------|----------------|
| T6 | **Services index missing structured data** - `/services/index.html` has no JSON-LD schema at all | Medium | services/index.html |
| T7 | **Contact page missing structured data** - No `ContactPage` or `LocalBusiness` schema | Medium | contact.html |
| T8 | **Location pages missing `BreadcrumbList`** - Service pages have breadcrumbs but location pages do not | Medium | All 5 location/*.html + locations/index.html |
| T9 | **Missing `og:image` on most pages** - Only homepage and locations index have `og:image` meta tags. Service pages and other pages lack social sharing images | Medium | 16 of 20 pages |

### 1.3 Security - GOOD (8/10)

**Strengths:**
- Honeypot field for bot protection on all forms
- Rate limiting on API (5 per IP per minute)
- IP hashing with SHA-256 (privacy-preserving)
- Admin page (`manage.html`) blocked in robots.txt

**Issues Found:**
| # | Issue | Severity | Pages Affected |
|---|-------|----------|----------------|
| T10 | **No Content-Security-Policy meta tag** - CSP would help prevent XSS | Medium | All pages |
| T11 | **Google Maps iframe lacks CSP considerations** - Inline styles used with Google Maps embed | Low | contact.html, locations/*.html |
| T12 | **Email address displayed as plain text in footer** - `info@bristolemergencyplumber.co.uk` on homepage is not obfuscated, inviting spam | Low | index.html |

---

## 2. CODE QUALITY AUDIT

### 2.1 HTML - VERY GOOD (8.5/10)

**Strengths:**
- Valid `<!DOCTYPE html>` declaration on all pages
- `lang="en-GB"` correctly set for UK English
- Semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`
- ARIA roles used: `role="banner"`, `role="navigation"`, `role="main"`, `role="contentinfo"`, `role="complementary"`
- Skip navigation link on all pages
- `aria-label="Main navigation"` on nav element
- `aria-expanded` toggle on hamburger menu
- Form labels properly associated with inputs via `for`/`id`
- `required` attribute used on mandatory form fields

**Issues Found:**
| # | Issue | Severity | Pages Affected |
|---|-------|----------|----------------|
| C1 | **Redundant ARIA roles** - `role="banner"` on `<header>`, `role="main"` on `<main>`, `role="contentinfo"` on `<footer>` are implicit in HTML5 and redundant | Low | All pages |
| C2 | **Missing `aria-label` on contact form** - The `<form>` elements lack `aria-label` or `aria-labelledby` | Low | index.html, contact.html |
| C3 | **No `<h1>` context for 404 page** - The 404 page uses `<h1>404</h1>` which is not descriptive for screen readers. Should be `<h1>Page Not Found</h1>` with 404 as decorative | Low | 404.html |
| C4 | **Heading hierarchy skip on services/index.html** - Service items use `<h2>` for individual services within a `<section>` that has no preceding `<h2>`. The section-level heading is missing | Low | services/index.html |
| C5 | **Email not wrapped in `<a href="mailto:">` in footer** - On homepage, the email is plain text rather than a clickable mailto link | Low | index.html |

### 2.2 CSS - VERY GOOD (8.5/10)

**Strengths:**
- CSS custom properties for consistent theming
- Single stylesheet (1,188 lines) - good for caching
- Responsive design with mobile-first media queries
- Focus styles defined for accessibility (`:focus` with outline)
- No CSS frameworks - lean custom styles
- Smooth transitions and animations (not excessive)

**Issues Found:**
| # | Issue | Severity | Pages Affected |
|---|-------|----------|----------------|
| C6 | **No `prefers-reduced-motion` media query** - Animations (pulse, phone ring, ring pulse) should respect user motion preferences | Medium | style.css |
| C7 | **Inline styles used on contact.html** - Grid layout and font sizing done via `style=""` attributes instead of CSS classes | Low | contact.html |
| C8 | **No print stylesheet** - No `@media print` rules. Printing would include the sticky CTA bar and navigation | Low | style.css |
| C9 | **`.hero-grid` fixed width `400px` for form** - Could cause overflow on tablets between 768-840px | Low | style.css |

### 2.3 JavaScript - GOOD (7.5/10)

**Strengths:**
- Minimal JS footprint - no frameworks or libraries
- Async form submission with error handling
- Graceful degradation for form feedback
- Hamburger menu with proper ARIA state management

**Issues Found:**
| # | Issue | Severity | Pages Affected |
|---|-------|----------|----------------|
| C10 | **Hamburger menu script duplicated on every page** - Same 6-line script copy-pasted. Should be in shared JS file | Low | All pages |
| C11 | **No form validation feedback before submit** - Forms rely only on HTML5 `required` - no inline validation or aria-invalid states | Low | index.html, contact.html |
| C12 | **Form doesn't disable re-submission** - If user double-clicks submit, two requests could fire before the first resolves (the button disable happens after await starts) | Low | index.html, contact.html |

---

## 3. UX AUDIT

### 3.1 Navigation - VERY GOOD (8.5/10)

**Strengths:**
- Sticky header remains visible during scroll
- Clear CTA button ("Call 0117 428 0200") in header
- Consistent navigation across all pages (Home, Services, Locations)
- Hamburger menu for mobile with animated toggle
- Skip-to-content link for keyboard users
- Breadcrumb structured data (though not visible breadcrumbs)

**Issues Found:**
| # | Issue | Severity | Pages Affected |
|---|-------|----------|----------------|
| U1 | **No visible breadcrumb navigation** - BreadcrumbList schema exists but there are no visible breadcrumbs for users to see their location in the site hierarchy | High | All sub-pages |
| U2 | **"About" and "Contact" not in main nav** - These important pages only accessible via footer links | Medium | All pages |
| U3 | **No active state for current page in nav** - Users can't see which page they're on in the navigation | Medium | All pages |
| U4 | **Nav links limited to 3 items** - Only Home, Services, Locations. Service sub-pages and contact aren't accessible from nav without visiting Services first | Medium | All pages |

### 3.2 Mobile Responsiveness - GOOD (8/10)

**Strengths:**
- Proper viewport meta tag
- Responsive grid layouts using `auto-fit` and `minmax`
- Mobile hamburger menu
- Stack-on-mobile for hero grid
- Touch-friendly button sizes (min 44px tap target via 14px padding + font size)
- Sticky click-to-call bar optimized for mobile

**Issues Found:**
| # | Issue | Severity | Pages Affected |
|---|-------|----------|----------------|
| U5 | **Contact page grid doesn't stack on mobile** - The `contact-grid` uses inline `grid-template-columns: 1fr 1fr` with no responsive override. Will be cramped on mobile | High | contact.html |
| U6 | **No tablet-specific breakpoint** - Only one breakpoint at 768px. Tablets (768-1024px) may show suboptimal layouts | Low | All pages |
| U7 | **Header phone number CTA may be hidden behind hamburger on small screens** - The CTA button and hamburger compete for space | Low | All pages |

### 3.3 CTAs and Conversion - EXCELLENT (9/10)

**Strengths:**
- Multiple conversion paths: phone call, callback form, contact form
- Sticky click-to-call bar on every page
- Hero form with clear value proposition ("We'll get back to you within 30 minutes")
- Trust signals prominent: Gas Safe, no call-out fee, response time, reviews
- Urgency badge with animated green dot ("Engineers available now")
- Phone icon animation draws attention
- CTA sections at bottom of every page

**Issues Found:**
| # | Issue | Severity | Pages Affected |
|---|-------|----------|----------------|
| U8 | **No callback form on sub-pages** - Only the homepage has the hero callback form. Service and location pages have only phone CTA | Medium | All non-homepage pages |

---

## 4. INDEXABILITY AUDIT

### 4.1 robots.txt - GOOD (8/10)

**Current configuration:**
```
User-agent: *
Allow: /
Sitemap: https://bristolemergencyplumber.co.uk/sitemap.xml
Disallow: /admin/
Disallow: /private/
Disallow: /manage
Allow: /assets/
```

**Issues Found:**
| # | Issue | Severity |
|---|-------|----------|
| I1 | **`/manage` vs `/manage.html`** - robots.txt blocks `/manage` but the actual file is `/manage.html`. The disallow should be `/manage.html` to properly block it. The current rule would only match `/manage` exactly or paths starting with `/manage/` | High |
| I2 | **Missing Disallow for `/functions/` and `/scripts/`** - Server-side API code and build scripts are accessible | Low |

### 4.2 Sitemap - VERY GOOD (9/10)

**14 URLs included** with proper priorities:
- Homepage: 1.0 (weekly)
- Service pages: 0.9 (monthly)
- Index pages: 0.8 (monthly)
- Location + about pages: 0.7 (monthly)

**Issues Found:**
| # | Issue | Severity |
|---|-------|----------|
| I3 | **`lastmod` dates are all identical (2026-02-10)** - Every URL has the same date which reduces its signal value to search engines. Should reflect actual modification dates | Low |
| I4 | **Missing `<lastmod>` accuracy** - The generate-sitemap.sh script uses git dates, but all pages appear to have been committed simultaneously | Low |

### 4.3 Canonical Tags - PERFECT (10/10)

- Every indexable page has a self-referencing `<link rel="canonical">` with the correct absolute URL
- All canonical URLs use HTTPS
- All canonical URLs match the sitemap URLs exactly
- Legal pages (noindex) still have canonical tags (good practice)

### 4.4 Meta Robots - PERFECT (10/10)

- All 14 indexable pages have `<meta name="robots" content="index, follow">`
- Legal pages (privacy, terms, cookies, accessibility) have `<meta name="robots" content="noindex, follow">`
- 404 page has `<meta name="robots" content="noindex">`
- Admin page excluded via robots.txt

### 4.5 Redirects - EXCELLENT (9/10)

- 26 `301` redirects from old individual location pages to new regional pages
- Proper permanent redirect status code
- All redirect targets exist as valid pages

**Issues Found:**
| # | Issue | Severity |
|---|-------|----------|
| I5 | **Old location URLs not in sitemap** - While redirected, these URLs may still appear in search results. A `<link rel="canonical">` from old to new would also help if any cached versions exist | Low |

---

## 5. ON-PAGE SEO AUDIT

### 5.1 Title Tags - VERY GOOD (8.5/10)

| Page | Title | Length | Assessment |
|------|-------|--------|------------|
| Homepage | Emergency Plumber Bristol \| 24/7 Plumbing Services \| Call Now | 58 chars | Good - keyword-first, includes CTA |
| Emergency | Emergency Plumber Bristol \| 24/7 Rapid Response \| Call Now | 57 chars | Good - clear, keyword-focused |
| 24 Hour | 24 Hour Plumber Bristol \| Day & Night Service \| Call Anytime | 59 chars | Good - target keyword first |
| Boiler | Boiler Repair Bristol \| Gas Safe Engineers \| Same Day Service | 60 chars | Good - keyword + trust signal |
| Blocked Drains | Blocked Drains Bristol \| Drain Clearance & CCTV Surveys \| Fast Response | 71 chars | **Too long** - truncated in SERPs |
| Services | Plumbing Services Bristol \| Full Service List \| Bristol Emergency Plumber | 72 chars | **Too long** - truncated |
| Locations | Locations We Serve \| Plumber in Bristol \| Bristol Emergency Plumber | 66 chars | Borderline long |
| Contact | Contact Us \| Bristol Emergency Plumber \| 24/7 Availability | 57 chars | Good |
| About | About Us \| Bristol Emergency Plumber \| Local Trusted Plumbers | 59 chars | Good |
| North Bristol | Plumber in North Bristol \| Horfield, Filton, Southmead \| 24/7 Emergency Service | 78 chars | **Too long** |
| South Bristol | Plumber in South Bristol \| Bedminster, Knowle, Brislington \| Emergency Service | 77 chars | **Too long** |
| East Bristol | Plumber in East Bristol \| Fishponds, Easton, St George \| 24/7 Emergency | 70 chars | **Too long** |
| West Bristol | Plumber in West Bristol \| Clifton, Redland, Cotham \| Period Property Specialists | 79 chars | **Too long** |
| Central Bristol | Plumber in Central Bristol \| Montpelier, St Pauls \| Commercial & Residential | 75 chars | **Too long** |

**Issues Found:**
| # | Issue | Severity |
|---|-------|----------|
| S1 | **8 of 14 title tags exceed 60 characters** - Google truncates at ~60 chars. Location page titles are particularly long | High |
| S2 | **Location page titles list areas rather than using the keyword prominently** - Could be shortened to "Emergency Plumber North Bristol \| 24/7 Service" | Medium |

### 5.2 Meta Descriptions - VERY GOOD (9/10)

All 14 indexed pages have unique meta descriptions. Lengths range from 120-160 characters (ideal). All include:
- Primary keyword
- Location (Bristol)
- Call to action or unique selling proposition

**Issues Found:**
| # | Issue | Severity |
|---|-------|----------|
| S3 | **Services index missing `keywords` meta tag** - While keywords meta is largely ignored by Google, it's present on other pages for consistency | Low |
| S4 | **About page missing `keywords` meta tag** | Low |

### 5.3 Heading Structure - VERY GOOD (8.5/10)

All pages follow proper heading hierarchy:
- Single `<h1>` per page containing the primary keyword
- `<h2>` for major sections
- `<h3>` for sub-sections
- `<h4>` used appropriately in location area cards

**Issues Found:**
| # | Issue | Severity |
|---|-------|----------|
| S5 | **Homepage has `<h2>` inside hero form** - "Not urgent? Request a callback" is an `<h2>` but could be semantically confusing as it's within the hero, before the main content `<h2>` sections | Low |
| S6 | **Services index uses `<h2>` for each service item** - These should arguably be `<h3>` since they're within a section, or the section needs its own `<h2>` | Low |

### 5.4 Image Optimization - VERY GOOD (9/10)

**Strengths:**
- All raster images in WebP format
- Descriptive `alt` text on all images (e.g., "Emergency plumber service area covering North Bristol including Horfield, Filton and Bishopston")
- `width` and `height` attributes set (prevents CLS)
- `loading="lazy"` on below-fold images
- `decoding="async"` on location card images
- `title` attributes on location images
- SVG format for logo and favicon (scalable, tiny)

**Issues Found:**
| # | Issue | Severity |
|---|-------|----------|
| S7 | **No `alt` text on hero background images** - Hero images are CSS backgrounds so they can't have alt text. Consider using an `<img>` with object-fit for the hero instead, or adding `aria-label` to the hero section | Low |
| S8 | **Service pages have no images at all** - The 4 service detail pages are text-only with no supporting imagery | Medium |

### 5.5 Keyword Optimization - VERY GOOD (8.5/10)

Primary keywords are well-targeted per page:
- Homepage: "Emergency Plumber Bristol"
- Service pages: "{Service} Bristol" (e.g., "Boiler Repair Bristol")
- Location pages: "Plumber in {Area} Bristol"

**Strengths:**
- Keywords appear in H1, title, meta description, and first paragraph
- Natural keyword density (not over-optimized)
- Related/LSI keywords used throughout content
- Bristol postcodes mentioned for local relevance
- Neighbourhood names included for long-tail targeting

---

## 6. INTERNAL LINKING AUDIT

### 6.1 Link Map (Outgoing Internal Links Per Page)

| Source Page | Links Out | Destinations |
|------------|-----------|--------------|
| **Homepage** | 22 | Services (4), Locations (6), About, Contact, Services index, Locations index, Legal (4) |
| **Emergency Plumber** | 16 | Home, Services index, Locations index, 3 location pages, Service pages (3), About, Contact, Legal (4) |
| **24 Hour Plumber** | 16 | Home, Services index, Locations index, 3 location pages, Service pages (3), About, Contact, Legal (4) |
| **Boiler Repair** | 17 | Home, Services index, Locations index, 3 location pages, Emergency page, Service pages (3), About, Contact, Legal (4) |
| **Blocked Drains** | 17 | Home, Services index, Locations index, 3 location pages, Emergency page, Service pages (3), About, Contact, Legal (4) |
| **Services Index** | 15 | Home, Services index, Locations index, 4 service pages (×2), About, Contact, Legal (4) |
| **Locations Index** | 19 | Home, Services index, Locations index, 5 location pages (×2), Service pages (4), Legal (4) |
| **Location Pages** (each) | 15 | Home, Services index, Locations index, Service pages (4), Location pages (5), Legal (4) |
| **About** | 17 | Home, Services index, Locations index, 3 location pages, Contact, Service pages (4), Legal (4) |
| **Contact** | 15 | Home, Services index, Locations index, Service pages (4), About, Locations, Legal (4) |

### 6.2 Link Distribution Analysis

**Most linked-to pages (internal link equity):**
1. Homepage `/` - Linked from every page (logo + nav + footer) = ~20 links
2. Service pages - Each linked from footer on every page + service cards = ~20 links each
3. Location pages - Linked from homepage, locations index, footer on location pages = ~8-12 links each
4. About page - Linked from footer on every page = ~20 links
5. Contact page - Linked from footer on every page = ~20 links

### 6.3 Issues Found

| # | Issue | Severity | Details |
|---|-------|----------|---------|
| L1 | **Service pages don't cross-link to each other** - Emergency page doesn't link to 24-hour, boiler, or drains pages. Each service page is isolated from sibling services | High |
| L2 | **Location pages don't cross-link to other locations** - North Bristol doesn't link to South, East, West, or Central within body content (only in footer on some pages) | High |
| L3 | **No "back to locations" link in body content of location pages** - Only accessible via nav | Medium |
| L4 | **Service pages don't link to the services index** - No breadcrumb or "View all services" link in body content | Medium |
| L5 | **Homepage footer has more links than sub-page footers** - Homepage footer includes Gas Safe Register link and email; sub-pages don't | Low |
| L6 | **About page not linked from service page body content** - Trust signals could benefit from linking to the about page (e.g., "our qualified team" could link to about) | Medium |
| L7 | **Contact page only linked from About page CTA and footer** - Could benefit from more prominent linking from service/location pages | Medium |
| L8 | **No location cross-references in location pages** - e.g., North Bristol page doesn't mention "also see nearby West Bristol" | Medium |

### 6.4 Orphan Page Check

No orphan pages found. All 14 indexed pages are reachable from the homepage within 2 clicks:
- Homepage → Service pages (1 click)
- Homepage → Location pages (1 click via locations grid)
- Homepage → Services index (1 click via nav)
- Homepage → Locations index (1 click via nav)
- Homepage → About (1 click via footer)
- Homepage → Contact (1 click via footer)

### 6.5 Link Depth

| Depth | Pages |
|-------|-------|
| 0 (root) | Homepage |
| 1 click | Services index, Locations index, 4 service pages, About, Contact |
| 2 clicks | 5 location pages (via Locations index) |

All pages within 2 clicks - good for crawlability.

---

## 7. SUMMARY OF CRITICAL FIXES

### Priority 1 - HIGH (Should Fix Immediately)

| # | Fix | Impact |
|---|-----|--------|
| S1 | **Shorten title tags on 8 pages to under 60 characters** | Direct SERP visibility improvement |
| L1 | **Add cross-links between service pages** | Improved link equity distribution and user navigation |
| L2 | **Add cross-links between location pages** | Improved link equity and geographical relevance signals |
| U1 | **Add visible breadcrumb navigation on sub-pages** | Better user orientation and potential rich snippets |
| U5 | **Fix contact page mobile grid layout** | Broken mobile UX |
| I1 | **Fix robots.txt to block `/manage.html`** | Prevent admin page indexing |

### Priority 2 - MEDIUM (Should Fix Soon)

| # | Fix | Impact |
|---|-----|--------|
| T6-T8 | Add missing structured data (services index, contact, breadcrumbs) | Enhanced SERP features |
| T9 | Add `og:image` to all pages | Better social media sharing |
| U2 | Add About/Contact to main navigation | Improved user access to trust signals |
| U3 | Add active state for current nav item | Better user orientation |
| S8 | Add images to service detail pages | Better engagement and SEO |
| L6-L7 | Improve cross-linking to About and Contact pages | Better trust signal distribution |
| C6 | Add `prefers-reduced-motion` media query | Accessibility compliance |

### Priority 3 - LOW (Nice to Have)

| # | Fix | Impact |
|---|-----|--------|
| T4 | Replace `document.write()` with static year | Minor SEO/compatibility |
| C5 | Make email a mailto link | Usability |
| C7 | Move inline styles to CSS classes | Code cleanliness |
| C8 | Add print stylesheet | Edge case UX |
| I2 | Block scripts/functions directories | Minor security |

---

## 8. OVERALL SCORES

| Category | Score | Grade |
|----------|-------|-------|
| **Technical Performance** | 8.0/10 | A- |
| **Structured Data** | 9.0/10 | A |
| **Code Quality (HTML)** | 8.5/10 | A |
| **Code Quality (CSS)** | 8.5/10 | A |
| **Code Quality (JS)** | 7.5/10 | B+ |
| **UX / Navigation** | 8.0/10 | A- |
| **Mobile Responsiveness** | 8.0/10 | A- |
| **CTAs & Conversion** | 9.0/10 | A |
| **Indexability** | 9.0/10 | A |
| **On-Page SEO** | 8.5/10 | A |
| **Internal Linking** | 7.0/10 | B |
| **Overall** | **8.3/10** | **A-** |

The site is well-built with strong fundamentals. The main areas for improvement are internal cross-linking between sibling pages, title tag length optimization, and adding visible breadcrumbs.
