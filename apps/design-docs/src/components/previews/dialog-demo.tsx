"use client"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Button,
} from "@nebutra/ui/primitives"
export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Example Dialog</DialogTitle>
          <DialogDescription>
            This is an example dialog. You can put any content here.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
