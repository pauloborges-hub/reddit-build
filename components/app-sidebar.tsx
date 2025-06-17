import * as React from "react"
import { FlameIcon, HomeIcon, Minus, Plus, TrendingUpIcon } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"

import PostifyLogo from '@/images/PostifyLogo.png'

type SidebarData = {
  navMain: {
    title: string
    url: string
    items: {
      title: string
      url: string
      isActive: boolean
    }[]
  }[]
}

// This is sample data.
const sidebarData: SidebarData = {
  navMain: [
    {
      title: "Communities",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
          isActive: false
        },
        {
          title: "Project Structure",
          url: "#",
          isActive: false
        },
      ],
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // TODO: get all subreddits from sanity

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href='/'>
                <Image
                  src={PostifyLogo}
                  alt='logo'
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>

        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                {/* TODO: add create community button */}
                {/* Create community button */}
              </SidebarMenuButton>

              <SidebarMenuButton asChild className="p-5">
                <Link href='/'>
                  <HomeIcon className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton asChild className="p-5">
                <Link href='/hot'>
                  <TrendingUpIcon className="w-4 h-4 mr-2" />
                  Popular
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton asChild className="p-5">
                <Link href='/popular'>
                  <FlameIcon className="w-4 h-4 mr-2" />
                  Hot / Controversial
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu>
            {sidebarData.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar >
  )
}
