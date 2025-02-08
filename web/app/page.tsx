import { AppSidebar } from '@/components/app-sidebar';
import {
    SidebarInset,
    SidebarProvider,
} from '@/components/ui/sidebar';
import TravelPlanner from '@/app/travel-planner';
import * as React from 'react';
import AppHeader from '@/components/app-header';

export default function Home() {
    return (
        <section>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <div className="h-screen relative">
                        <AppHeader />
                        <TravelPlanner />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </section>
    );
}


