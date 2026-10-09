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
- Family sync status panel ready for Supabase-backed shared-access setup

## Run locally
Open `index.html` directly in a browser, or serve the folder with a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Shared family access setup (Supabase)

This repository is ready for a secure shared family space, but it does not yet have live credentials or a connected backend. The configuration is intentionally left as placeholders so no secret credentials are committed to the publicly visible repository.

### 1. Create a Supabase project
1. Sign in to https://supabase.com and create a new project.
2. Save the project URL and anon public key.
3. Do not commit these values into the repo.

### 2. Add app config
Update `config.js` with the values from your Supabase project:

```js
window.APP_CONFIG = {
  familyBook: {
    backend: 'Supabase',
    syncEnabled: true
  },
  supabase: {
    url: 'https://your-project.supabase.co',
    anonKey: 'your-anon-key',
    enabled: true
  }
};
```

### 3. Enable authentication
Create auth providers in Supabase for the family users. Recommended approach:
- Email/password sign-in for each partner
- One family account or supported shared access model
- Use server-side checks and row-level security (RLS)

### 4. Create database tables
Apply the SQL in `supabase-setup.sql` inside the Supabase SQL editor. This creates:
- `profiles`
- `timeline_entries`
- `memories`
- `diary_entries`
- `letters`
- `voice_notes`
- `family_photos`

### 5. Configure storage buckets
Create private storage buckets named, for example:
- `family-photos`
- `family-audio`

Use private buckets. Never expose family photos or voice notes through public URLs. Use signed URLs or server-side access control with short-lived tokens.

### 6. Add row-level security and policies
The SQL file provides a starting policy set. Expand it with stricter policies to enforce:
- only authenticated users can read shared family records
- only the permitted family members can update/delete entries
- no access to another family’s private records
- private object access must be checked at the server level

### 7. Secure deployment
- Keep all secret keys in environment variables or your hosting provider secret store.
- Do not place service-role keys in browser JavaScript.
- Never use public storage buckets for private family data.

## Offline and install
- The app uses a service worker for the application shell only.
- Family photographs, recordings and account data should not be cached in a public or unrestricted way.
- On supported browsers, the app can be installed to the home screen.

## Backups and safety
- Export is available through the Settings panel as JSON.
- Import performs a local validation step before restoring data.
- Backups should be stored privately and restored only with explicit confirmation.

## Notes
- This version is designed for privacy-first local use and can be extended with Supabase or another secure backend for shared multi-user syncing.
- Cloud photos, voice recordings and shared family authentication still require secure service configuration before syncing across devices.
