import React from "react";

interface HeaderComponentProps {
  children: string; // Add this line to specify the type
}

export default function HeaderComponent({ children }: HeaderComponentProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
