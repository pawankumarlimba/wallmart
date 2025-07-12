"use client"

import * as React from "react"
import { Plus, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { NewsletterHeader } from "./newsletter-header/newsletter-header"
import { StatsCards } from "./stats-cards/stats-cards"
import { NewslettersTable } from "./newsletters-table/newsletters-table"
import { SubscribersTable } from "./subscribers-table/subscribers-table"
import { TemplatesGrid } from "./templates-grid/templates-grid"


// Sample data
const newsletters = [
  {
    id: 1,
    title: "Weekly Product Updates",
    subject: "New features and improvements this week",
    status: "sent" as const,
    sentDate: "2024-01-15",
    recipients: 1250,
    openRate: 24.5,
    clickRate: 3.2,
  },
  {
    id: 2,
    title: "Monthly Company News",
    subject: "January highlights and upcoming events",
    status: "draft" as const,
    sentDate: null,
    recipients: 0,
    openRate: 0,
    clickRate: 0,
  },
  {
    id: 3,
    title: "Holiday Special Offers",
    subject: "Exclusive deals for our subscribers",
    status: "scheduled" as const,
    sentDate: "2024-01-20",
    recipients: 1500,
    openRate: 0,
    clickRate: 0,
  },
]

const subscribers = [
  {
    id: 1,
    email: "john.doe@example.com",
    name: "John Doe",
    status: "active" as const,
    subscribedDate: "2024-01-10",
    tags: ["premium", "early-adopter"],
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    name: "Jane Smith",
    status: "active" as const,
    subscribedDate: "2024-01-08",
    tags: ["newsletter"],
  },
  {
    id: 3,
    email: "mike.johnson@example.com",
    name: "Mike Johnson",
    status: "unsubscribed" as const,
    subscribedDate: "2024-01-05",
    tags: ["newsletter"],
  },
]

export default function NewsletterPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = React.useState(false)


  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <NewsletterHeader />

      {/* Stats Cards */}
      <StatsCards />

      {/* Main Content */}
      <Tabs defaultValue="newsletters" className="space-y-4">
        <TabsList>
          <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
          <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="newsletters" className="space-y-4">
          <NewslettersTable newsletters={newsletters} />
        </TabsContent>

        <TabsContent value="subscribers" className="space-y-4">
          <SubscribersTable subscribers={subscribers} />
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <TemplatesGrid />
        </TabsContent>
      </Tabs>

      {/* Create Newsletter Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Newsletter
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Newsletter</DialogTitle>
            <DialogDescription>Create a new newsletter to send to your subscribers.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Newsletter Title</Label>
              <Input id="title" placeholder="Enter newsletter title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Email Subject</Label>
              <Input id="subject" placeholder="Enter email subject line" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" placeholder="Write your newsletter content here..." className="min-h-[200px]" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="audience">Target Audience</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subscribers</SelectItem>
                  <SelectItem value="premium">Premium Users</SelectItem>
                  <SelectItem value="new">New Subscribers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Save as Draft
            </Button>
            <Button onClick={() => setIsCreateDialogOpen(false)}>
              <Send className="mr-2 h-4 w-4" />
              Send Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
