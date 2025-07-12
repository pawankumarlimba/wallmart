'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutGrid, FileText, Store, ClipboardList, FolderGit2, Users, UserSquare, Megaphone, Ticket, MessageSquare, Mail, Settings, HelpCircle, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
}

const mainNavItems: NavItem[] = [
  { title: 'Overview', href: '/', icon: LayoutGrid },
  { title: 'Store', href: '/admin-store', icon: Store },
  { title: 'Orders', href: '/order-details', icon: ClipboardList },
]

const clientNavItems: NavItem[] = [
  { title: 'Feedback', href: '/admin-feedback', icon: MessageSquare },
  { title: 'Newsletter', href: '/admin-newsletter', icon: Mail },
]

const bottomNavItems: NavItem[] = [
  { title: 'Settings', href: '/AdminSettings/AdminProfile', icon: Settings },
  { title: 'Support', href: '/AdminSupport', icon: HelpCircle },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = pathname === item.href
    const Icon = item.icon
    
    return (
      <Link
        href={item.href}
        className={cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all',
          'hover:bg-[#707FDD]/20 hover:text-[#707FDD]',
          isActive && 'bg-[#707FDD]/20 text-[#707FDD]'
        )}
      >
        <Icon className="h-5 w-5" />
        {item.title}
      </Link>
    )
  }

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-40 rounded-lg p-2 bg-white shadow-md lg:hidden"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <aside
        className={cn(
          'fixed inset-y-0 left-0 lg:left-auto z-30 w-64 overflow-y-auto transform bg-white transition-transform duration-200 ease-in-out lg:translate-x-0',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col border-r">
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/avatars/01.png" alt="Olivia Rhye" />
                <AvatarFallback>OR</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Olivia Rhye</span>
                <span className="text-xs text-gray-500">Gmailsgood.com</span>
              </div>
            </div>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            <div className="space-y-1">
              {mainNavItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </div>

            <div className="mt-8">
              <h2 className="px-3 text-[14px]  text-gray-500">Client section</h2>
              <div className="mt-2 space-y-1">
                {clientNavItems.map((item) => (
                  <NavLink key={item.href} item={item} />
                ))}
              </div>
            </div>

            <div className="xl:fixed border-t xl:bottom-4 xl:left-0 xl:right-0 space-y-1 xl:px-4">
              {bottomNavItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </div>
          </nav>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

