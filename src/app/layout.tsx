import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: "Corpgems - Connecting Professionals through Events | International Education, IT, Teaching & Learning",
  description: "Join Corpgems for world-class networking events across International Education, IT, Teaching & Learning, and Not-for-Profit sectors. Transform your career through premium events, micro-credentials, and professional development.",
  keywords: "international education, professional networking, corporate events, micro-credentials, professional development, recruitment, IT training, teaching innovation, not-for-profit, global networking",
  authors: [{ name: "Corpgems" }],
  creator: "Corpgems",
  publisher: "Corpgems",
  openGraph: {
    title: "Corpgems - Connecting Professionals through Events",
    description: "Transform your career through world-class networking events and professional development across International Education, IT, Teaching & Learning, and Not-for-Profit sectors.",
    url: "https://corpgems.com",
    siteName: "Corpgems",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://corpgems.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corpgems - Connecting Professionals through Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corpgems - Connecting Professionals through Events",
    description: "Transform your career through world-class networking events and professional development.",
    creator: "@corpgems",
    images: ["https://corpgems.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://corpgems.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    'theme-color': '#41c1ba',
    'color-scheme': 'light',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://ext.same-assets.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ext.same-assets.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#41c1ba" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Corpgems",
              "description": "Professional networking events across International Education, IT, Teaching & Learning, and Not-for-Profit sectors",
              "url": "https://corpgems.com",
              "logo": "https://corpgems.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61405550886",
                "contactType": "customer service",
                "email": "info@corpgems.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1/7 Hassall St",
                "addressLocality": "Parramatta",
                "addressRegion": "NSW",
                "postalCode": "2150",
                "addressCountry": "AU"
              },
              "sameAs": [
                "https://linkedin.com/company/corpgems",
                "https://twitter.com/corpgems"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: 'Corpgems Homepage',
              page_location: window.location.href,
              send_page_view: true
            });
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "YOUR_PARTNER_ID";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>

        {/* Hotjar Tracking */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        <div id="skip-link" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-opal text-white px-4 py-2 rounded-md z-50">
          <a href="#main-content">Skip to main content</a>
        </div>
        <main id="main-content" role="main">
          {children}
        </main>
        <div id="live-region" aria-live="polite" aria-atomic="true" className="sr-only"></div>

        {/* Performance monitoring */}
        <Script id="performance-monitor" strategy="afterInteractive">
          {`
            // Track Core Web Vitals
            function trackWebVitals() {
              if ('web-vitals' in window) {
                getCLS(sendToAnalytics);
                getFID(sendToAnalytics);
                getFCP(sendToAnalytics);
                getLCP(sendToAnalytics);
                getTTFB(sendToAnalytics);
              }
            }

            function sendToAnalytics(metric) {
              gtag('event', metric.name, {
                event_category: 'Web Vitals',
                event_label: metric.id,
                value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                non_interaction: true,
              });
            }

            // Track page load performance
            window.addEventListener('load', function() {
              setTimeout(function() {
                var perfData = performance.getEntriesByType('navigation')[0];
                gtag('event', 'page_load_time', {
                  event_category: 'Performance',
                  value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
                  non_interaction: true,
                });
              }, 0);
            });

            // Track user engagement
            let maxScroll = 0;
            window.addEventListener('scroll', function() {
              const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
              if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if (maxScroll % 25 === 0) {
                  gtag('event', 'scroll_depth', {
                    event_category: 'Engagement',
                    event_label: maxScroll + '%',
                    value: maxScroll,
                    non_interaction: true,
                  });
                }
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
