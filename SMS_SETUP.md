# SMS Notification Setup (Twilio)

This site can send SMS text messages to your phone when bookings are made. You'll need a Twilio account.

## Setup Steps

### 1. Create a Twilio Account
1. Go to: https://www.twilio.com/try-twilio
2. Sign up for a free account (includes $15.50 credit for testing)
3. Verify your email and phone number

### 2. Get Your Twilio Credentials
1. Log into your Twilio Console: https://console.twilio.com/
2. Go to "Account" → "API Keys & Tokens"
3. You'll see:
   - **Account SID** (starts with `AC...`)
   - **Auth Token** (click "View" to reveal)

### 3. Get a Twilio Phone Number
1. In Twilio Console, go to "Phone Numbers" → "Manage" → "Buy a number"
2. Choose a number (free trial includes one number)
3. Copy the phone number (format: +1234567890)

### 4. Set Environment Variables in Vercel

Go to your Vercel project → Settings → Environment Variables and add:

**Key:** `RECIPIENT_PHONE`  
**Value:** Your phone number in E.164 format (e.g., `+13093121408`)
- Include country code (1 for US)
- Start with `+`
- No spaces or dashes

**Key:** `TWILIO_ACCOUNT_SID`  
**Value:** Your Account SID from Twilio (starts with `AC...`)

**Key:** `TWILIO_AUTH_TOKEN`  
**Value:** Your Auth Token from Twilio

**Key:** `TWILIO_PHONE_NUMBER`  
**Value:** Your Twilio phone number (format: `+1234567890`)

### 5. Phone Number Format
- **Your phone (RECIPIENT_PHONE):** `+13093121408` (your actual number)
- **Twilio number (TWILIO_PHONE_NUMBER):** `+1234567890` (the Twilio number you bought)

## Cost
- **Free Trial:** $15.50 credit included
- **SMS Cost:** ~$0.0075 per SMS (less than 1 cent)
- **Phone Number:** Free on trial, ~$1/month after

## Testing
After setup, submit a test booking. You should receive:
- ✅ Email to brianleasuretime@gmail.com
- ✅ SMS text to your phone number

## Troubleshooting
- Make sure phone numbers include country code and start with `+`
- Check Twilio Console → Logs for any errors
- Verify all environment variables are set correctly in Vercel

