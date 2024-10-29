"use client"

import { useClerk, useUser } from "@clerk/nextjs"
import { ChevronsUpDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

export const UserProfileSection = () => {
    const { user } = useUser();
    const { signOut } = useClerk()
    const getInitials = () => {
        if (!user) return "?";
        const firstName = user.firstName || "";
        const lastName = user.lastName || "";
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };

    return (
        <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
                            <AvatarFallback>{getInitials()}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-0.5 leading-none">
                            <span className="font-semibold">{user?.fullName}</span>
                            <span className="text-xs text-muted-foreground truncate max-w-[150px]">
                                {user?.primaryEmailAddress?.emailAddress}
                            </span>
                        </div>
                        <ChevronsUpDown className="ml-auto" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width]"
                    align="start"
                >
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut({ redirectUrl: '/' })}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    );
};