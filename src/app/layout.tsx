import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getUserLocale } from "@/lib/locale";
import { getMessages } from "next-intl/server";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Hyogo Medical Guide",
  description: "Find English-speaking clinics and hospitals in Kobe, Nishinomiya, and surrounding areas.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getUserLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${tajawal.className} ${tajawal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50/50">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
