import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Mail } from "lucide-react"

export function TemplatesGrid() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Newsletter Templates</CardTitle>
            <CardDescription>Pre-designed templates for your newsletters</CardDescription>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Template
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((template) => (
            <Card key={template} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-[4/3] bg-muted rounded-md mb-3 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-1">Template {template}</h3>
                <p className="text-sm text-muted-foreground mb-3">A clean and modern newsletter template</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1">
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
