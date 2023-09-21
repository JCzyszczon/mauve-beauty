import './globals.css';
import { Inter } from 'next/font/google';
import CookieConsent from './components/cookies';
import AuthProvider from './context/authProvider';
import LogOutButton from './components/logOutButton';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  generator: 'Next.js',
  applicationName: 'Mauve',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Dagmara Misiewicz', url:'https://www.facebook.com/mauvebeautypl/?locale=pl_PL' }, { name: 'Jakub Czyszczoń', url: 'https://github.com/JCzyszczon' }],
  colorScheme: 'light',
  creator: 'Jakub Czyszczoń',
  publisher: 'Dagmara Misiewicz',
  title: 'Strona główna | Mauve.pl',
  description: 'Generated by create next app',
  keywords: ['Makijaż', 'Makijaż permanentny', 'Makijaż permanentny brwi', 'Usługi kosmetyczne', 'Uroda', 'Kraków', 'Salon kosmetyczny Kraków', 'Makijaż Kraków', 'Makijaż permanentny brwi Kraków', 'Makijaż permanentny Kraków', 'Makijaż okolicznościowy', 'Brwi', 'Mauve.pl', 'Mauve', 'Mauve Beauty', 'Dagmara', 'Dagmara Misiewicz', 'Jordanów', 'Małopolska', 'Makijaż ślubny', 'Makijaż próbny ślubny', 'Laminacja z koloryzacją i regulacją brwi', 'Koloryzacja z regulacją brwi', 'Laminacja z regulacją brwi'],
  alternates: {
    canonical: 'https://mauve.pl',
  },
  openGraph: {
    title: 'Mauve',
    description: 'The React Framework for the Web',
    url: 'https://mauve.pl/',
    siteName: 'Mauve',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <AuthProvider>
          <LogOutButton/>
          {children}
          <CookieConsent/>
        </AuthProvider>
      </body>
    </html>
  )
}
