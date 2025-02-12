'use client';

import { type LucideIcon, MessageCircleMore } from 'lucide-react';
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon?: LucideIcon;
        isActive?: boolean;
        items?: {
            title: string;
            url: string;
        }[];
    }[];
}) {
    return (
        <SidebarGroup className="p-2 gap-y-10">
            <SidebarMenu className="gap-2">
                {items.map((item, _) => (
                    <Link href={item.url} legacyBehavior key={_}>
                        <SidebarMenuButton
                            className="gap-4 py-5 hover:rounded-full px-3"
                            tooltip={item.title}
                        >
                            {item.icon && <item.icon className="scale-[1.5]" />}
                            <span className="text-[15px] font-semibold">
                                {item.title}
                            </span>
                        </SidebarMenuButton>
                    </Link>
                ))}
            </SidebarMenu>

            <Button
                variant="ghost"
                className="bg-secondary py-5 rounded-full space-x-2"
            >
                <MessageCircleMore /> Plan new Travel
            </Button>
        </SidebarGroup>
    );
}
