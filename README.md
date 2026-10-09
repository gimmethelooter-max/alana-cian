# Alana & Cian

A warm, private family memory book built as a mobile-first progressive web app for sharing memories, notes, milestones, diary entries and hopes for the future.

## Current status

This app is intentionally kept as a lightweight static web app so it can be hosted on Vercel or a simple static server. It currently runs fully in-browser with local storage and includes a warm family-focused interface and a planned-arrival countdown for Jack and Max on 3 February 2027.

## Features
- Home dashboard with a warm family memory-book layout
- Planned-arrival countdown for 3 February 2027
- Timeline of relationship milestones and family moments
- Memories, diary, letters, pregnancy journey and future plans
- Export and import of JSON family data
- PWA install support and offline shell caching

## Run locally
Open `index.html` directly in a browser, or serve the folder with a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes
- This version is designed for privacy-first local use and can be extended with Supabase or another secure backend for shared multi-user syncing.
- Cloud photos, voice recordings and shared family authentication still require environment setup and service credentials before syncing across devices.
