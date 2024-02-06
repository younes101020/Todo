"use client";

import { Todo as TodoType } from "@/features/todos/types";
import { Tag } from "./ui";
import { MoreHorizontal, Trash, Pencil } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Dialog,
  DialogTrigger,
  Checkbox,
  //Label,
  Input,
  DialogFooter,
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui";
import { ActiveDialog, MentionField } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  title: z.string(),
  status: z.enum(["NOT_STARTED", "IN_PROGRESS"]),
  priority: z.enum(["1", "2", "3"]),
  tags: z.string()
});

const Todo = ({
  title,
  tags,
  status,
  priority,
  createdAt
}: Omit<TodoType, "id">) => {
  let color: string;

  switch (priority) {
    case 1:
      color = "border-green-400/75 ring-green-400/50";
      break;
    case 2:
      color = "border-orange-400/75 ring-orange-400/50";
      break;
    case 3:
      color = "border-red-400/75 ring-red-400/50";
      break;
    default:
      color = "";
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      status: "NOT_STARTED",
      priority: "1",
      tags: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <li
      className={`flex flex-col divide-y divide-foreground/50 gap-6 border-2 px-5 py-4 ${color} rounded-md border-dotted ring-offset-slate-900 ring-2 ring-offset-2`}
    >
      <div className="flex gap-2 items-center">
        <Checkbox />
        <h1 className="whitespace-nowrap">{title}</h1>
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-auto cursor-pointer" asChild>
              <MoreHorizontal size={20} className="stroke-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[160px]">
              <DialogTrigger asChild>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex gap-2">
                    <Pencil size={18} />
                    <p>Modifier</p>
                  </div>
                </DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex gap-2 text-destructive">
                  <Trash size={18} className="stroke-destructive" />
                  <p>Supprimer</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ActiveDialog title={title}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 overflow-hidden"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titre</FormLabel>
                      <FormControl>
                        <MentionField field={field} tags={tags} />
                      </FormControl>
                      <FormDescription>
                        Pour ajouter des tags utilisez #
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">Enregistrer</Button>
                </DialogFooter>
              </form>
            </Form>
          </ActiveDialog>
        </Dialog>
      </div>
      <ul className="font-light grid grid-cols-3 gap-2 text-xs pt-5">
        {tags.map((tag, index) => {
          return <Tag key={index} tag={tag} />;
        })}
      </ul>
    </li>
  );
};

export { Todo };
