import type React from "react"
import type { ReactNode } from "react"
import Sidebar from "@/components/admin-sidebar/admin-sidebar" // Assuming this is your custom sidebar
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import AITextGenerator from "@/components/ai-text-generator/ai-text"


interface LayoutProps {
  children: ReactNode
}

export function Layout(props: LayoutProps): React.ReactElement {
  const { children } = props
  return (
    <div className="container-fluid flex min-h-screen">
      <div className="flex-1 flex flex-col">
        <Sidebar />
        <main className="flex-1 px-3 py-0 ml-0 lg:ml-64">{children}</main>
        {/* AI Chat Button moved to the right with an offset */}
        <div className="fixed bottom-24 right-12 lg:right-48 group flex items-end justify-end gap-2 z-50">
          <span className="text-black text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with AI
          </span>
          {/* Chat Button with Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="p-4 rounded-full shadow-xl bg-gradient-to-r from-[#9BA9FBCC] to-[#3F66FB99] transition-all active:scale-95 flex items-center justify-center"
                aria-label="Open AI Chat"
              >
                <MessageCircle className="w-[40px] h-[40px]" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1000px] overflow-y-auto max-h-[500px]">
              <DialogTitle className="text-center w-full">AI Chatbot</DialogTitle>
              <DialogHeader>
                <DialogDescription>
                  <AITextGenerator />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
