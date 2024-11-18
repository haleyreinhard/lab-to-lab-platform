# Lab to Lab Platform

## Setup Instructions

1. Create a Supabase project at https://supabase.com
2. Copy your project URL and anon key from Project Settings > API
3. Create a `.env` file by copying `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Update the `.env` file with your Supabase credentials
5. Install dependencies:
   ```bash
   npm install
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```

## Features
- Lab Directory
- Professional Community
- Marketplace for Lab Services
- Contact System
- User Authentication
- Lab Registration

## Environment Variables
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key