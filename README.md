# Educent Pro - Educational Platform

![Educent Pro Banner](https://imgix.cosmicjs.com/ce5c3c80-b7aa-11f0-ac0f-f7b89d2a648e-photo-1573496359142-b8d87734a5a2-1762067680321.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A production-grade educational platform connecting students, teachers, parents, principals, and administrators. Built with Next.js, TypeScript, TailwindCSS, and powered by [Cosmic](https://www.cosmicjs.com).

## ✨ Features

- 🎓 **Multi-Role System** - Five distinct user roles with tailored dashboards
- 🏆 **Reward Management** - Complete workflow tracking from request to approval
- 📚 **AI Study Assistant** - Integrated AI-powered learning support
- ✅ **Digital Attendance** - Modern attendance tracking with geolocation
- 💬 **Query System** - Direct student-teacher communication
- 📊 **Real-Time Updates** - Live notifications and status changes
- 🔒 **Secure Authentication** - Role-based access control with JWT
- 📱 **Fully Responsive** - Works seamlessly on all devices

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6906e78a271316ad9f4d0b41&clone_repository=6906eae4271316ad9f4d0b81)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "You are a world-class full-stack system architect + lead developer. Build a production-grade, enterprise educational platform named "Educent Pro" exactly to the following specification. Do not omit any micro-function described below. Use these exact implementation decisions and defaults unless explicitly contradicted by subsequent instructions: DEFAULTS (do not change): - Frontend: Next.js (React 18) + TypeScript + TailwindCSS - Backend: Node.js + Express microservices (hosted on a persistent Node host for sockets) - Auth & Database: Supabase (Postgres) for authentication, row-level security, and persistence - Real-time: Socket.io running on a dedicated Node service (connects to Supabase for events where needed) - AI: Google Gemini API for Study Buddy, Paper Generator, and Assignment Feedback - Design theme: "Academic Minimal" — bright, white surfaces, subtle glassmorphism, blue → purple accents - Admin hidden credential (system requirement): Username = HARSHA9949, Password = HARSHA9949 (store hashed) - Accessibility: WCAG 2.1 AA compliance; ARIA labels & keyboard navigation for all interactive UI"

### Code Generation Prompt

> "now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies

- [Next.js 16](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com/docs) - Headless CMS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Hook Form](https://react-hook-form.com/) - Form validation
- [Socket.io](https://socket.io/) - Real-time communication

## 📋 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- Cosmic account with configured bucket
- API keys (Cosmic, Google Gemini for AI features)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd educent-pro
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
# Create .env.local file
cp .env.example .env.local
# Add your Cosmic credentials
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 Cosmic SDK Examples

```typescript
// Fetch users with specific role
const response = await cosmic.objects
  .find({ type: 'users', 'metadata.role.key': 'student' })
  .props(['title', 'metadata'])
  .depth(1);

// Update reward status
await cosmic.objects.updateOne(rewardId, {
  metadata: {
    status: { key: 'lecturer_verified', value: 'Lecturer Verified' }
  }
});

// Create new attendance record
await cosmic.objects.insertOne({
  title: 'Attendance - Student Name - Date',
  type: 'attendance',
  metadata: {
    student: studentId,
    class: classId,
    status: { key: 'present', value: 'Present' },
    date: new Date().toISOString()
  }
});
```

## 🔗 Cosmic CMS Integration

This application is fully integrated with Cosmic CMS using the following object types:

- **Users** - Multi-role user management
- **Classes** - Academic class organization
- **Enrollments** - Student-class associations
- **Attendance** - Daily attendance tracking
- **Rewards** - Achievement and reward system
- **Syllabus Items** - Course content management
- **Queries** - Student-teacher communication
- **Notifications** - Real-time alerts
- **Audit Logs** - System activity tracking
- **Fraud Cases** - Security monitoring
- **Institute Requests** - Institution onboarding

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Connect to Git provider
2. Configure build settings
3. Add environment variables
4. Deploy

### Environment Variables

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

For additional features (AI, real-time), add:
```env
GOOGLE_GEMINI_API_KEY=your-gemini-key
SOCKET_SERVER_URL=wss://your-socket-server.com
JWT_SECRET=your-jwt-secret
```

## 📝 License

MIT License - feel free to use this project for your own purposes.

<!-- README_END -->