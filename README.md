# Alana & Cian

A warm, private family memory book built as a mobile-first progressive web app for sharing memories, notes, milestones, diary entries and hopes for the future.

## Features
- Home dashboard with a warm family memory-book layout
- Planned-arrival countdown for 3 February 2027
- Timeline of relationship milestones and family moments
- Memories, diary, letters, pregnancy journey and future plans
- Export and import of JSON family data
- PWA install support and offline shell caching
- Shared-sync configuration status for Supabase-ready setup

## Run locally
Open `index.html` directly in a browser, or serve the folder with a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Shared family sync: setup required
This app intentionally remains local-first and safe by default. It does not claim shared sync is active without secure credentials and database setup.

To enable multi-user family access in a real deployment, use a secure backend such as Supabase with:

1. Secure email/password or magic-link authentication for each partner.
2. A shared family workspace table, such as `family_profiles`.
3. Protected tables for `memories`, `timeline_entries`, `letters`, `diary_entries`, `pregnancy_updates`, `photos`, and `voice_notes`.
4. Row-level security policies to restrict access to only the family record assigned to the signed-in user.
5. Private object storage buckets for photographs and audio, with signed URLs for access.
6. Environment variables stored on the hosting platform, never directly in client-side JavaScript.
7. Migration scripts and backups for data recovery.

## Example configuration
A ready-to-fill example is provided in `family-sync-config.example.js`.

```js
window.__FAMILY_BOOK_CONFIG__ = {
  enableSharedSync: false,
  appName: 'Alana & Cian Family Book',
  supabaseUrl: 'https://your-project.supabase.co',
  supabaseAnonKey: 'replace-with-anon-key'
};
```

Important:
- Do not store service-role keys or database passwords in browser code.
- Only use public anon keys in client code; protect secrets on the server side.
- Keep private family photos and voice notes out of public caches.

## Notes
- This version is designed for privacy-first local use and can be extended with Supabase or another secure backend for shared multi-user syncing.
- Cloud photos, voice recordings and shared family authentication still require environment setup and service credentials before syncing across devices.
