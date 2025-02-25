
"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  date: string;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCards({ cards }: { cards: CardProps[] }) {
  return (
    <div className="relative grid w-full [grid-template-areas:'stack'] items-center justify-center">
      {cards.map((card, i) => (
        <Card
          key={i}
          className={cn(
            "pointer-events-auto relative col-start-1 row-start-1 flex flex-col justify-between rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm px-5 py-3 transition-all duration-700",
            card.className
          )}
        >
          <div>
            <div
              className={cn(
                "mb-2 flex items-center justify-between",
                card.iconClassName
              )}
            >
              {card.icon}
              <div className="text-xs text-neutral-400">{card.date}</div>
            </div>
            <div
              className={cn(
                "mb-2 text-lg font-medium text-neutral-200",
                card.titleClassName
              )}
            >
              {card.title}
            </div>
            <div className="text-sm text-neutral-400">{card.description}</div>
          </div>
        </Card>
      ))}
    </div>
  </div>);
}

export default DisplayCards;
