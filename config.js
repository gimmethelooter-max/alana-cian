# Configure your secure shared family space.
# Copy this file to config.local.js or replace the values below with your real Supabase project settings.
# Never commit real secrets or service-role keys into client-side JavaScript.

window.APP_CONFIG = {
  familyBook: {
    backend: 'Supabase',
    syncEnabled: false
  },
  supabase: {
    url: '',
    anonKey: '',
    enabled: false
  }
};
