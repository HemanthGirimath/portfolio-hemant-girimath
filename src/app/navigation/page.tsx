'use client'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,

} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const  Navigation=()=> {
  return (
    <nav className="w-full md:w-full">
      <div className="flex w-full justify-around md:justify-between items-center ">
        {/* Logo Section */}
        <div className="flex-none">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">
                <Avatar className="object-fit">
                  <AvatarImage src="/"/>
                  <AvatarFallback className="text-sm text-foreground">HG</AvatarFallback>
                </Avatar>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Navigation Links Section */}
        <div className="flex-none ">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-10">
              <NavigationMenuItem>
                <NavigationMenuLink href="/"  className="hover:text-emerald-400 text-sm md:font-bold md:tracking-wide">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="/about-me"  className="hover:text-emerald-400 text-sm md:font-bold md:tracking-wide">
                  About me
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="/cover-letter"  className="hover:text-emerald-400 text-sm md:font-bold md:tracking-wide">
                  Cover Letter
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );  
}

export default Navigation;