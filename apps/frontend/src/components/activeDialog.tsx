"use client";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "./ui";

export function ActiveDialog({
  children,
  title
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          Modifier les paramétres de votre todo ici, appuyez sur Enregistrez
          quand vous aurez terminer.
        </DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  );
}
