'use client'

import Image from "next/image"
import { Card } from "@/components/ui/card"

interface TransactionItemProps {
  logo: string
  serviceName: string
  description: string
  amount: string
  date: string
}

export function TransactionItem({ 
  logo = "https://v0.dev/placeholder.svg", 
  serviceName = "Youtube", 
  description = "Subscription Payment", 
  amount = "$15,00", 
  date = "16 May 2024" 
}: TransactionItemProps) {
  return (
    <Card className="p-4 w-full max-w-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 relative">
            <Image
              src={logo}
              alt={`${serviceName} logo`}
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{serviceName}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold">{amount}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </Card>
  )
}