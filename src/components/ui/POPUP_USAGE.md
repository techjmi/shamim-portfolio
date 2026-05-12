# Popup Component Usage Guide

## Overview
The Popup component is a flexible, customizable popup/modal that can be used to display advertisements, promotional content, or important announcements on your website.

## Features
- ✅ **Auto-close** functionality with customizable timer (default: 3 seconds)
- ✅ **Progress bar** that shows time remaining before auto-close
- ✅ **Click outside to close** - users can close by clicking the overlay
- ✅ **Close button** - manual close option
- ✅ **Responsive design** - works on mobile and desktop
- ✅ **Smooth animations** - fade in and slide effects
- ✅ **Optional image** - can include promotional images
- ✅ **CTA button** - call-to-action with link

## Basic Usage

```jsx
import Popup from "@/components/ui/Popup";

<Popup
  title="Welcome!"
  description="Check out my new content"
  cta="Visit Now"
  ctaLink="https://example.com"
  autoClose={true}
  autoCloseTime={3000}
  onClose={() => console.log('Popup closed')}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | Popup title/heading |
| `description` | string | - | Popup description text |
| `cta` | string | - | Call-to-action button text |
| `ctaLink` | string | - | CTA button link URL |
| `image` | string | null | Image URL for popup banner |
| `autoClose` | boolean | true | Enable/disable auto-close |
| `autoCloseTime` | number | 3000 | Auto-close time in milliseconds |
| `onClose` | function | - | Callback when popup closes |
| `className` | string | "" | Additional CSS classes |
| `children` | ReactNode | - | Custom content |

## Examples

### 1. Simple Popup (Auto-close in 3 seconds)
```jsx
<Popup
  title="🚀 Ace Your Next Interview!"
  description="Prepare for your dream job with InterviewOrbit"
  cta="Visit InterviewOrbit"
  ctaLink="https://intervieworbit.site/"
/>
```

### 2. Custom Time (Auto-close in 5 seconds)
```jsx
<Popup
  title="Check Out My Blog!"
  description="Latest articles on web development"
  cta="Read Blog"
  ctaLink="https://intervieworbit.site/"
  autoCloseTime={5000}
/>
```

### 3. No Auto-close (Manual close only)
```jsx
<Popup
  title="Important Announcement"
  description="Please read this carefully"
  cta="Learn More"
  ctaLink="/announcement"
  autoClose={false}
/>
```

### 4. With Image
```jsx
<Popup
  title="New Feature Release!"
  description="Check out our latest updates"
  cta="Explore Now"
  ctaLink="/features"
  image="/promotional-banner.jpg"
  autoCloseTime={4000}
/>
```

## Using with Constants

The popup content is managed in `/src/constant/popup-constant.js`:

```javascript
import { active_popup, popup_config } from "@/constant/popup-constant";

<Popup
  {...active_popup}
  autoClose={popup_config.autoClose}
  autoCloseTime={popup_config.autoCloseTime}
/>
```

## Available Popup Presets

In `popup-constant.js`, you have these presets:
- `interview_orbit_popup` - Promote InterviewOrbit website
- `blog_popup` - Promote blog content
- `projects_popup` - Promote portfolio projects
- `custom_popup` - Custom welcome message

To switch between popups, change the `active_popup` export:
```javascript
export const active_popup = interview_orbit_popup; // or blog_popup, projects_popup, etc.
```

## Configuration

Global popup settings in `popup-constant.js`:
```javascript
export const popup_config = {
  enabled: true,        // Toggle popup on/off globally
  autoClose: true,      // Enable auto-close
  autoCloseTime: 3000,  // Default time in ms
};
```

## Styling

The popup uses SCSS and follows your design system. Customize in `/src/components/ui/popup.scss`.

Key style features:
- Backdrop blur effect
- Smooth fade-in animation
- Slide-in from top (desktop) or bottom (mobile)
- Progress bar with gradient
- Hover effects on buttons

## Tips

1. **Don't Annoy Users**: Use reasonable auto-close times (3-5 seconds)
2. **Mobile First**: The popup is responsive and looks great on all devices
3. **Accessibility**: Include meaningful titles and descriptions
4. **Testing**: Test the popup behavior before deploying
5. **Analytics**: Add tracking to the `onClose` callback if needed

## Disable Popup

To temporarily disable the popup, set in `popup-constant.js`:
```javascript
export const popup_config = {
  enabled: false,  // Popup won't show
  // ...
};
```
