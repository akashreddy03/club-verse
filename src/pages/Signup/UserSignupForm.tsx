"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupSchema = z.object({
  email: z.string().email(),
});

const UserSignupForm = () => {
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignupSchema>) {
    console.log(values);
  }

  return (
    <div className="grid place-self-center w-96 h-fit gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="name@example.com"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      {...field}
                      //   disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              {/* {isLoading && (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        )} */}
              Sign In with Email
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background bg-white px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" type="button">
              {
                // isLoading ? (
                //   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                // ) :
                // (
                //   <Icons.gitHub className="mr-2 h-4 w-4" />
                // )
              }
              GitHub
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UserSignupForm;
