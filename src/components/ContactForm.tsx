"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ContactButton from "./icons/contact-button";

export default function ContactForm() {
  const form = useForm();
  const { control } = form;

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="ghost" className="!p-0 h-auto">
            <div className="fixed bottom-8 right-8 z-10 scale-250">
              <ContactButton />
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact me</DialogTitle>
            <DialogDescription>
              Use this form to contact me and I'll respond shortly!
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl className="bg-muted">
                    <Input minLength={1} maxLength={50} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl className="bg-muted">
                    <Input
                      minLength={1}
                      maxLength={50}
                      type="email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl className="bg-muted">
                    <Textarea
                      minLength={1}
                      maxLength={300}
                      className="resize-none min-h-30"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
