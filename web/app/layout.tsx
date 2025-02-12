import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import AppHeader from '@/components/app-header';
import TravelPlanner from '@/app/travel-planner';
import * as React from 'react';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Project81',
    description: 'Explore the beauty of the Philippines!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable}, ${inter.variable} antialiased`}
            >
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <section className="h-screen relative">
                            {children}
                        </section>
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    );
}
