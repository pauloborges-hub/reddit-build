'use client'

import { SignedIn, SignedOut, useUser, SignInButton, UserButton, } from "@clerk/nextjs"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

import PostifyLogo from '@/images/PostifyLogo.png'
import PostifyLogoOnly from '@/images/PostifyLogoOnly.png'

function Header() {
    const { user } = useUser()

    return (
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
            {/* Left Side */}
            <div className="flex items-center gap-2">
                <MenuIcon className="w-6 h-6"/>
                <Image 
                    src={PostifyLogo}
                    alt='logo'
                    width={150}
                    height={150}
                    className="hidden md:block"
                />
                <Image 
                    src={PostifyLogoOnly}
                    alt='logo'
                    width={40}
                    height={40}
                    className="block md:hidden"
                />
            </div>

            {/* Right Side */}
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <Button asChild variant='outline'>
                        <SignInButton mode="modal" />
                    </Button>
                </SignedOut>
            </div>
        </header>
    )
}

export default Header