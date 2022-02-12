import React from "react";
import Image from "next/image";
import { Card } from "./Card";
import SearchInput from "./SearchInput";
import { Button } from "./Button";

const SubscribeCard = () => {
  return (
    <Card className="mt-8">
      <div id="subscribe" className="text-center">
        <span className="text-xl font-bold">Subscribe to the newsletter</span>
        <p className="">Get emails from me about web development, tech...</p>
        <form action="" className="flex flex-col">
          <input type="text" placeholder="Name" className="border" />
          <input type="email" required placeholder="Email" className="border" />
          <Button> Subscribe</Button>
        </form>
      </div>
    </Card>
  );
};

export default SubscribeCard;
