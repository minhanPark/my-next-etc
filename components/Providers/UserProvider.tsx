"use client";

import { nanoid } from "nanoid";

type UserProviderProps = {
  children: React.ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  if (typeof window !== "undefined") {
    const existingUser = localStorage.getItem("user");
    if (!existingUser) {
      localStorage.setItem("user", nanoid());
    }
  }
  return <>{children}</>;
}

export default UserProvider;
