
import SideBar from '@/components/shared/Sidebar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });


export default function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <>
            <div className="flex min-h-screen flex-col md:flex-row">
                <SideBar />
                <div className="flex-1">{children}</div>
            </div>
        </>
    );
}
