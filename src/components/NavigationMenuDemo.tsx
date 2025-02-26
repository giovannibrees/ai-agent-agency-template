import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="bg-gradient-to-r from-[#1a1a1a]/50 to-[#2a2a2a]/50 backdrop-blur-sm rounded-lg px-2">
      <NavigationMenuList className="space-x-2">
        {/* Navigation items removed as requested */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
