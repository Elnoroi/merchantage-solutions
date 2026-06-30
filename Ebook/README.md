# MerchantAge Solutions - Website

A modern, responsive website for MerchantAge Solutions, a Kenyan online government services platform.

## Project Structure

```
d:\Ebook\
├── index.html                    # Main homepage
├── assets/
│   ├── css/
│   │   └── style.css            # Complete styling with responsive design
│   ├── js/
│   │   └── main.js              # JavaScript for search, modals, animations
│   └── images/                  # Image assets (optional)
└── pages/
    ├── ecitizen.html            # eCitizen Services
    ├── kra.html                 # KRA Services
    ├── ntsa.html                # NTSA Services
    ├── helb.html                # HELB Services
    ├── sha.html                 # SHA Services
    ├── nssf.html                # NSSF Services
    └── business.html            # Business Services
```

## Features Implemented

✅ **Pixel-Perfect Design** - Matches the reference template exactly  
✅ **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile  
✅ **Bootstrap 5** - Professional grid system and components  
✅ **Custom CSS** - Modern styling with gradients, shadows, and animations  
✅ **Interactive Search** - Real-time search across all services  
✅ **Service Request Modal** - Capture user inquiries with form validation  
✅ **Smooth Animations** - Hover effects, scroll animations, and transitions  
✅ **Floating WhatsApp Button** - Always-visible contact button with bounce animation  
✅ **Sticky Header** - Navigation stays at top while scrolling  
✅ **How It Works Section** - 6-step process with animated circles  
✅ **Service Categories** - 7 detailed service pages with individual services  
✅ **Trust Badges** - Security, reliability, and support indicators  
✅ **Footer** - Professional footer with links and contact info  

## Color Scheme

- Navy Blue: `#0B1F4D`
- Emerald Green: `#16A34A`
- Light Gray: `#F8FAFC`
- Text Dark: `#1F2937`
- Text Muted: `#6B7280`

## Typography

- Font: Poppins (Google Fonts)
- Font Weights: 300, 400, 500, 600, 700

## External Libraries

- **Bootstrap 5**: CDN link for responsive grid and components
- **Font Awesome 6.4**: CDN link for icons
- **Google Fonts**: Poppins font family

## Key Functionalities

### 1. Search Feature
- Searches all services by name and category
- Instant filtering with no page reload
- Click to request service directly from search results

### 2. Request Service Modal
- Auto-filled with selected service name
- Captures: Full Name, Phone, County, Contact Method
- Form validation before submission
- Shows success message after submission

### 3. Responsive Design Breakpoints
- **Desktop** (≥992px): Full layout with all elements
- **Tablet** (768px - 991px): Adjusted spacing and sizing
- **Mobile** (<768px): Hamburger menu, stacked layout

### 4. Animations
- Hover effects on cards (lift, shadow, border)
- Smooth scroll behavior
- Fade-in animations on scroll
- Bounce animation on floating WhatsApp button
- Success modal popup animation

## Getting Started

1. **Extract/Open the Files**: Place all files in your web server directory
2. **Open in Browser**: Navigate to `index.html` in your browser
3. **No Build Required**: This is pure HTML, CSS, and JavaScript

## Customization

### Colors
Edit the CSS variables in `assets/css/style.css`:
```css
:root {
    --navy-blue: #0B1F4D;
    --emerald-green: #16A34A;
    --light-gray: #F8FAFC;
}
```

### Contact Information
Update the phone number `0718 467 511` in:
- Header top bar
- Footer
- Floating WhatsApp button
- Contact section

### Services
Add or modify services in `assets/js/main.js` in the `services` object.

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Optimizations

✅ Lazy loading for images  
✅ Minified CSS and JavaScript  
✅ CDN for external libraries  
✅ Semantic HTML  
✅ Optimized animations (GPU-accelerated)  

## SEO Features

✅ Semantic HTML structure  
✅ Descriptive page titles  
✅ Meta descriptions  
✅ Proper heading hierarchy  
✅ Alt text for images  

## Future Enhancements

- Backend integration for form submissions
- Payment gateway integration
- User authentication
- Service status tracking
- Customer dashboard
- Admin panel

## Support

For issues or questions, contact: 0718 467 511 (WhatsApp)

---

**© 2026 MerchantAge Solutions. All Rights Reserved.**
