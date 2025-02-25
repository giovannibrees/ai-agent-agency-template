
"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface CardType {
  icon: ReactNode;
  title: string;
  description: string;
  date: string;
  iconClassName?: string;
  titleClassName?: string;
  className?: string;
}

interface DisplayCardsProps {
  cards: CardType[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  return (
    <div className="relative grid min-h-[350px] place-items-center">
      <div className="relative grid h-60 w-full place-items-center">
        {cards.map((card, i) => (
          <Card
            key={i}
            className={cn(
              "absolute h-48 w-72 cursor-pointer p-6 transition-all duration-700",
              card.className
            )}
          >
            <div className="flex flex-col gap-4">
              <div className={cn("w-fit", card.iconClassName)}>{card.icon}</div>
              <div className="space-y-1">
                <p className={cn("font-medium", card.titleClassName)}>
                  {card.title}
                </p>
                <p className="text-sm text-neutral-300">{card.description}</p>
              </div>
              <p className="text-xs text-neutral-400">{card.date}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
