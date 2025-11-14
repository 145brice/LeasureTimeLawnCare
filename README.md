# Leasure Time Lawn Care and Maintenance

A fully functional, mobile-friendly website and booking system for lawn care services.

## Features

- 🏠 **Homepage** with hero section, services overview, and call-to-action
- 📅 **Interactive Calendar** for date selection
- ⏰ **Time Slot Selection** with available appointment times
- 📝 **Booking Form** with customer information and service selection
- ✅ **Booking Confirmation** with success message
- 📱 **Fully Responsive** design for mobile, tablet, and desktop
- 🎨 **Modern UI** with Tailwind CSS styling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
leasure-time-lawn-care/
├── app/
│   ├── book/
│   │   └── page.tsx          # Booking page with calendar and form
│   ├── services/
│   │   └── page.tsx          # Services listing page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── BookingForm.tsx       # Booking form component
│   ├── Calendar.tsx          # Calendar component
│   ├── Footer.tsx            # Footer component
│   └── Navbar.tsx            # Navigation bar
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Calendar** - Calendar component
- **date-fns** - Date utilities

## Features in Detail

### Booking Flow

1. **Date Selection**: Users select a date from an interactive calendar (past dates disabled)
2. **Time Selection**: Users choose from available time slots
3. **Details Form**: Users fill in their information and service preferences
4. **Confirmation**: Success message with booking details

### Mobile Responsiveness

- Responsive navigation with mobile menu
- Touch-friendly calendar and buttons
- Optimized layouts for all screen sizes
- Mobile-first design approach

## Customization

You can customize:
- Colors in `tailwind.config.js`
- Service types in `components/BookingForm.tsx`
- Time slots in `app/book/page.tsx`
- Contact information in `components/Footer.tsx`

## License

This project is private and proprietary.

