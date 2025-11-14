# Email Setup Instructions

This site uses Gmail to send email notifications for bookings and contact form submissions.

## Setup Steps

### 1. Enable 2-Step Verification
1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", enable "2-Step Verification" if not already enabled

### 2. Create an App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" as the app
3. Select "Other (Custom name)" as the device
4. Enter "Leasure Time Lawn Care Website" as the name
5. Click "Generate"
6. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### 3. Set Environment Variables

#### For Local Development:
Create a `.env.local` file in the root directory:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

#### For Vercel Deployment:
1. Go to your Vercel project dashboard
2. Click on "Settings" → "Environment Variables"
3. Add these variables:
   - `GMAIL_USER` = your Gmail address
   - `GMAIL_APP_PASSWORD` = your 16-character app password
   - `RECIPIENT_EMAIL` = email address to receive notifications (can be same as GMAIL_USER)

### 4. Important Notes
- Use the **App Password**, NOT your regular Gmail password
- The App Password is 16 characters (spaces don't matter)
- Keep your App Password secure and don't commit it to Git
- If you need to revoke access, go back to https://myaccount.google.com/apppasswords

### Testing
After setting up, test by submitting a booking or contact form. You should receive an email notification!

