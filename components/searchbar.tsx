"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};

const SearchSchema = z.object({
  link: z.string().refine(isValidAmazonProductURL, {
    message: "Valid Amazon product link is required",
  }),
});

export const Searchbar = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      link: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SearchSchema>) => {
    startTransition(() => {
      try {
        alert(values);
      } catch (error) {
        console.log(error);
      } finally {
      }
    });
  };

  return (
    <Form {...form}>
      <form className="flex" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-x-2 flex">
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    className="max-w-2xl flex-1"
                    placeholder="Enter Product Link"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={form.watch("link") === ""} type="submit">
            {isPending && (
              <>
                <Loader2 className="animate-spin mr-2" size={18} />
                Searching...
              </>
            )}
            {!isPending && <>Search</>}
          </Button>
        </div>
      </form>
    </Form>
  );
};
