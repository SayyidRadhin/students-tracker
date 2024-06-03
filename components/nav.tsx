"use client";
import { useGlobalContext } from "@/app/contexts/globalContext";
import { LogIn, Menu, User2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggler";

function Nav() {
  const { setShowModal, showModal } = useGlobalContext();

  // const [currentUser, setCurrentUser] = useState(auth.currentUser);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user);
  //   });

  //   return () => unsubscribe();
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth);
  //     // Perform any additional cleanup or navigation if needed
  //   } catch (error) {
  //     console.error("Error during logout:");
  //   }
  // };

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //    console.log(user.displayName);

  //   } else {
  //     // No user is signed in.
  //   }
  // });

  // const unsubscribe = auth.currentUser;
  // console.log(showModal);
  // console.log(unsubscribe);

  const router = useRouter();
  const onClick = () => {
    router.push("/login");
  };

  return (
    <nav className="fixed  border-b t-0 right-0 left-0 py-6  bg-white dark:bg-slate-950 flex justify-between items-center  z-20 px-8">
      <div className="w-8 h-8  dark:bg-slate-950 rounded flex gap-2">
        {" "}
        <Image
          src="/logo.png"
          alt=""
          width={40}
          height={34}
          className="mx-auto h-full"
        />
        <h3 className="font-bold text-2xl md:text-base opacity-80  text-slate-600">
          Students Tracker
        </h3>
      </div>
      <div className="hidden sm:block"></div>

      <div onClick={() => setShowModal(true)} className="sm:hidden">
        <Menu className="rounded-full opacity-80 dark:text-slate-200 cursor-pointer" />
      </div>
    </nav>
  );
}

export default Nav;
