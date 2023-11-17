import { Card, Flex, TextInput, Title } from "@tremor/react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "./firebase-lib/hooks";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();
  const { currentUser, signInCurrentUserWithEmailAndPassword } =
    useCurrentUser();

  useEffect(() => {
    if (currentUser !== null) {
      navigate("/", {
        replace: true,
        state: { from: "/login" },
      });
    }
  }, [currentUser, navigate]);

  async function onSubmit({ email, password }: z.infer<typeof formSchema>) {
    try {
      await signInCurrentUserWithEmailAndPassword(email, password);
      navigate("/");
    } catch (error) {
      form.setError("email", {
        type: "manual",
        message: "Invalid email or password",
      });
    }
  }

  return (
    <Flex className="h-full">
      <Flex className="m-auto">
        <Card className="max-w-sm mx-auto">
          <Title className="text-center mb-4">Login</Title>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Controller
                name="email"
                control={form.control}
                render={({ field }) => (
                  <TextInput
                    placeholder="Type email here"
                    type="email"
                    onValueChange={field.onChange}
                    error={!!form.formState.errors.email}
                    errorMessage={form.formState.errors.email?.message}
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <Controller
                name="password"
                control={form.control}
                render={({ field }) => (
                  <TextInput
                    placeholder="Type password here"
                    type="password"
                    onValueChange={field.onChange}
                    error={!!form.formState.errors.password}
                    errorMessage={form.formState.errors.password?.message}
                  />
                )}
              />
            </div>
            <Button className="w-full mt-2">Login</Button>
          </form>
        </Card>
      </Flex>
    </Flex>
  );
};
