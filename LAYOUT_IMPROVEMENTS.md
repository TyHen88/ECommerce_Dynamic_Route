# E-Commerce App - Improved Layout Setup

## 🚀 Improved Layout Features

This app now includes an improved layout structure with:

- **NextAuth Integration**: Complete authentication setup with Google OAuth2
- **React Query**: Data fetching and caching with TanStack Query
- **Enhanced Toast Management**: Smart toast limiting and better UX
- **App Router**: Modern Next.js 13+ App Router architecture
- **TypeScript**: Full type safety throughout

## 📁 Layout Structure

```
app/
├── layout.tsx                 # Root layout with providers
├── page.tsx                   # Home page
├── api/auth/[...nextauth]/     # NextAuth API routes
├── auth/                      # Authentication pages
├── admin/                     # Admin dashboard
├── products/                  # Product pages
└── oauth2/                    # OAuth2 redirect handler

components/
├── providers.tsx              # App-wide providers wrapper
├── layout-wrapper.tsx         # Layout wrapper component
├── header.tsx                 # Navigation header
└── ui/                        # UI components

lib/
├── auth.ts                    # NextAuth configuration
└── data.ts                    # Static data (replaces Supabase)
```

## 🔧 Environment Variables

Create a `.env.local` file with:

```bash
# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3333

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Backend API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_AUTH_BASE_PATH=/api/auth

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3333
```

## 🎯 Key Improvements

### 1. **Providers Component** (`components/providers.tsx`)
- Wraps the entire app with SessionProvider and QueryClientProvider
- Manages toast limits to prevent UI overflow
- Centralized provider configuration

### 2. **Enhanced Layout** (`app/layout.tsx`)
- Proper font loading with CSS variables
- Clean provider integration
- Better metadata configuration

### 3. **NextAuth Integration** (`lib/auth.ts`)
- Google OAuth2 provider setup
- JWT token handling
- Custom session callbacks
- TypeScript type extensions

### 4. **OAuth2 Redirect** (`app/oauth2/redirect.tsx`)
- Updated for App Router (useSearchParams instead of router.query)
- Better error handling
- Session state management

### 5. **Authentication Pages**
- Login page with Google OAuth integration
- Proper NextAuth signIn/signOut usage
- Better error handling

## 🚀 Usage

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables** (see above)

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Access the app**: http://localhost:3333

## 🔐 Authentication Flow

1. User clicks "Continue with Google" on login page
2. Redirects to backend OAuth2 endpoint (`/oauth2/authorization/google`)
3. Backend handles OAuth flow and redirects back with tokens
4. Frontend receives tokens via `/oauth2/redirect` page
5. NextAuth processes tokens and creates session
6. User is redirected to products page

## 📱 Features

- ✅ Static data (no database required)
- ✅ Google OAuth2 authentication
- ✅ Admin dashboard
- ✅ Product management
- ✅ Responsive design
- ✅ Toast notifications
- ✅ TypeScript support
- ✅ Modern App Router

## 🛠️ Development

The app uses:
- **Next.js 16** with App Router
- **NextAuth.js** for authentication
- **TanStack Query** for data fetching
- **Sonner** for toast notifications
- **Tailwind CSS** for styling
- **TypeScript** for type safety
