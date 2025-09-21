"use client"
import React from "react";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRoad, faLocation, faRoute, faLaptop, faNewspaper, faCode, faUserTie, faUser, faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"; // ✅ faDiscord shu yerda

import logo from "../../public/images/logo_.svg"

import Image from "next/image";

import { Button, List, ListItem, MenuItem, Select, Typography } from "@mui/material";
import { GitHub, MapTwoTone } from "@mui/icons-material";

import Link from "next/link";

import { MenuItemType } from "@/types/Menu.Props";
import MenuItemsSelect from "@/components/headr-components/MenuItems";
import AccountMenu from "@/components/headr-components/Settings";
import { fa3 } from "@fortawesome/free-solid-svg-icons/fa3";


export default function Home() {

  const [laguange, setlaguange] = useState<"uz" | "en" | "ru">("uz");
  const explore: MenuItemType[] = [
    {
      id: 1,
      name: "Learning Path",
      icon: <FontAwesomeIcon icon={faRoute} />
    }, {
      id: 2,
      name: "Challanges",
      icon: <FontAwesomeIcon icon={faLaptop} />
    }, {
      id: 3,
      name: "solutions",
      icon: <FontAwesomeIcon icon={faCode} />
    }, {
      id: 4,
      name: "articles",
      icon: <FontAwesomeIcon icon={faNewspaper} />
    }
  ]
  const for_components: MenuItemType[] = [
    {
      id: 5,
      name: "hire develoers",
      icon: <FontAwesomeIcon icon={faUserTie} />
    }, {
      id: 6,
      name: "train developers",
      icon: <FontAwesomeIcon icon={faUserGraduate} />
    }
  ]
  const [isOpens, setIsOpens] = useState<boolean[]>(Array(explore.length).fill(false))

  useEffect(() => console.log(isOpens), [isOpens])

  return (
    <div className="min-h-screen w-full">
      <header className="w-full py-4">
        <div className="container mx-auto flex justify-between max-md:flex-col items-center">
          <div className="logo flex items-center max-md:flex-col">
            <Image src={logo} alt="Logo" width={200} height={100} />
          </div>
          <div className="flex">
            <List sx={{ display: "flex" }} className="max-md:flex-col">
              <ListItem>
                <AccountMenu itemList={explore} menuName="Explore" />
              </ListItem>
              <ListItem>
                <AccountMenu itemList={for_components} menuName="For Components" />
              </ListItem>
              <ListItem>
                <Link className="uppercase flex font-bold font-secondary italic items-center gap-2" href="/" >
                  <h1>unlock</h1>
                  <span className="bg-blue-500 px-1 rounded text-white tracking-wider font-extrabold uppercase ease-initial">Pro</span>
                </Link>
              </ListItem>
              <ListItem>
                <Link className="border disabled:bg-neutral-500 disabled:border-neutral-500 flex font-bold font-secondary italic items-center justify-center px-5 text-center tracking-wider transition-colors rounded-full uppercase w-fit gap-2 whitespace-nowrap bg-neutral-900 border-neutral-900 hover:bg-neutral-700 hover:border-neutral-700 text-white py-2 text-sm" 
                href="https://github.com/login/oauth/authorize?client_id=f71675ff0aff88252d33&amp;scope=user:email" 
                target="_blank">
                  log in  with GitHub
                  <GitHub />
                </Link>
              </ListItem>
            </List>
          </div>
        </div>
      </header>

      <main>
        <section className="container  mx-auto px-60 py-12">
          <div className={`bg-no-repeat bg-[rgba(46,59,129,0.98)] [background-image:url('/images/bg-discord.svg')] [background-position:top_10%_right_-4rem] container-xl flex flex-col gap-6 items-center rounded-xl px-5 py-8 text-center text-white space-y-6`}>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faDiscord} className="text-5xl font-extrabold" />
              <h1 className="capitalize text-5xl font-extrabold"> discord</h1>
            </div>
            <h2 className="font-bold font-primary uppercase tracking-widest text-4xl">
              Join our Discord community
            </h2>
            <p className="max-w-prose text-2xl">
              Join thousands of Frontend Mentor community members taking the challenges, sharing resources, helping each other, and chatting about all things front-end!
            </p>
            <a className="border disabled:bg-neutral-500 disabled:border-neutral-500 flex font-bold font-secondary italic items-center justify-center px-5 py-3 text-center text-base tracking-wider transition-colors rounded-full uppercase w-fit leading-none bg-white border-white hover:bg-neutral-50 hover:border-neutral-50 text-blue-600" href="https://discord.gg/UAfh3qzhYb">
              Join our Discord
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
