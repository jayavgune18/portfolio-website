# Portfolio Review & Improvement Plan

## Current State Analysis
- **Stack**: Vite + React 18 + Tailwind CSS v4 + Framer Motion + EmailJS
- **Issues**: Contains cut features (CustomCursor, CommandPalette, LoadingScreen, LeetCode stats), percentage bars in Skills (fabricated for fresher), no SEO, no BackToTop, no reduced-motion support

## Changes Required

### REMOVE (per spec)
- [ ] CustomCursor component
- [ ] CommandPalette component  
- [ ] LoadingScreen component
- [ ] CodingProfiles component (replace with GitHubStats standalone)
- [ ] useLeetCodeStats hook
- [ ] Percentage bars from Skills (replace with category badges)
- [ ] ⌘K hint in App.jsx

### ADD/IMPROVE
- [ ] Install react-helmet-async for SEO
- [ ] BackToTop button component
- [ ] GitHubStats standalone section (live API, graceful fallback, top languages)
- [ ] Stat counters in About (real numbers: 3 projects, 50+ LeetCode, 12+ technologies)
- [ ] Category filter for Projects
- [ ] Category badges in Skills (no % bars)
- [ ] SEO: meta tags, Open Graph, JSON-LD Person schema
- [ ] Reduced-motion support (prefers-reduced-motion)
- [ ] Keyboard focus states throughout
- [ ] Update index.html with proper meta
- [ ] Update App.jsx to reflect all changes