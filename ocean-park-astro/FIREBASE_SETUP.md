# Firebase Setup Guide for Oceanpark Digital

## ✅ What We've Implemented

1. **Environment Variables** - Firebase config stored in `.env`
2. **Firebase SDK** - Installed and configured (Firestore + Auth)
3. **Email Collector Component** - React component with Firestore integration
4. **Google OAuth** - Sign in with Google button
5. **Contact Form** - Dual options: Google sign-in OR email signup

---

## 🔧 Firebase Console Setup Required

### Step 1: Enable Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **oceanparkdigital-32751**
3. In the left sidebar, click **"Firestore Database"**
4. Click **"Create database"**
5. Choose **"Start in production mode"**
6. Select a location (choose closest to your users, e.g., `us-central1`)
7. Click **"Enable"**

### Step 2: Enable Google Authentication

1. In Firebase Console, click **"Authentication"** in left sidebar
2. Click **"Get Started"** (if first time)
3. Go to **"Sign-in method"** tab
4. Find **"Google"** in the list and click on it
5. **Toggle to Enable**
6. Enter a **Project support email** (e.g., `partnerships@oceanparkdigital.com`)
7. Click **"Save"**

**Add Authorized Domains:**
1. Still in Authentication, go to **"Settings"** tab
2. Scroll to **"Authorized domains"**
3. Add your production domain (e.g., `oceanparkdigital.com`)
4. `localhost` is already authorized for local development

### Step 3: Set Up Firestore Security Rules

Go to **Firestore Database** → **Rules** tab and paste this:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Email collection - anyone can create
    match /emails/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
    
    // User profiles - users can only read/write their own
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Deny all other collections by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

**What these rules do:**
- ✅ Anyone can **submit** emails (create)
- ❌ Nobody can **read** email data from the client (privacy)
- ✅ Authenticated users can **read all user profiles**
- ✅ Users can **only edit their own profile**
- ❌ Nobody can access other collections

Click **"Publish"**

---

## 📊 View Collected Data

### Email Submissions
1. Go to **Firestore Database** in Firebase Console
2. Click on `emails` collection
3. Each document contains:
   - `name` - User's name
   - `email` - User's email
   - `timestamp` - When they submitted
   - `source` - Where they submitted from

### Google OAuth Users
1. Go to **Authentication** → **Users** tab
2. See all users who signed in with Google
3. For detailed profiles, go to **Firestore Database** → `users` collection
4. Each document contains:
   - `uid` - Unique user ID
   - `email` - Google account email
   - `displayName` - User's name from Google
   - `photoURL` - Profile picture URL
   - `lastSignIn` - Last sign-in timestamp
   - `createdAt` - Account creation timestamp

---

## 🎨 How It Works

### User Flow Option 1: Google Sign-In
1. User clicks **"Sign in with Google"**
2. Google authentication popup appears
3. User selects their Google account
4. User profile automatically saved to Firestore `users` collection
5. User sees their profile (name, email, photo)
6. Can sign out anytime

### User Flow Option 2: Email Signup
1. User enters name + email in form
2. Clicks **"Join Waitlist"**
3. Email saved to Firestore `emails` collection
4. Success message appears
5. No authentication required

---

## 📧 Export Emails to CSV (Optional)

### Method 1: Manual Export
1. Go to Firestore Database → `emails` collection
2. No built-in CSV export in Firebase Console
3. Use a third-party tool or write a script

### Method 2: Automated Email Digest
Set up a Cloud Function to email you daily/weekly with new signups.

---

## 🚀 Next Steps

1. ✅ Complete Firestore setup above
2. ✅ Enable Google Authentication
3. ✅ Set security rules
4. ✅ Test both signup methods locally
5. ✅ Check Firebase Console to see data appear
6. Deploy to production when ready

---

## 🧪 Testing Locally

1. Make sure dev server is running: `npm run dev`
2. Go to http://localhost:4321/
3. Scroll to "Connect With Us" section
4. **Test Google Sign-In:**
   - Click "Sign in with Google"
   - Select your Google account
   - Should see your profile displayed
   - Check Firestore → `users` collection
5. **Test Email Signup:**
   - Enter name and email
   - Click "Join Waitlist"
   - Should see success message
   - Check Firestore → `emails` collection

---

## 🔒 Security Notes

- ✅ `.env` file is gitignored (configs are safe)
- ✅ API keys are safe to expose (they're for client-side use)
- ✅ Firestore rules protect your data
- ✅ Only authenticated requests can access user profiles
- ✅ Google handles all OAuth security

---

## 📊 Optional: Export Emails to CSV

You can export emails using Firebase Console or set up a Cloud Function to automatically send you a daily digest.

---

## 🔐 Optional: Add Google OAuth (Sign In with Google)

If you want to add Google sign-in instead of just email collection, let me know and I'll add:
- Google OAuth button
- User authentication
- User profiles stored in Firestore
- Protected routes

---

## 🚀 Next Steps

1. ✅ Complete the Firestore setup above
2. ✅ Test the contact form on your local site
3. ✅ Check Firebase Console to see the email appear
4. Decide if you want Google OAuth or keep it simple

---

## 🧪 Testing

1. Go to http://localhost:4321/
2. Scroll to "Connect With Us" section
3. Enter name and email
4. Click "Get Started"
5. Check Firebase Console > Firestore Database > emails collection
