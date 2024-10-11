'use client'

import { Card } from "@/components/ui/card"
import { TransactionItem } from "./transaction-item"
import Logo from "../img/logo.png"

const transactions = [
  {
    logo: Logo,
    serviceName: "Youtube",
    description: "Servicios",
    amount: "$15,00",
    date: "16 May 2024"
  },
  {
    logo: Logo,
    serviceName: "Cena",
    description: "Comida",
    amount: "$12,99",
    date: "15 May 2024"
  },
  {
    logo: Logo,
    serviceName: "Sube",
    description: "Transporte",
    amount: "$14,99",
    date: "14 May 2024"
  },
  {
    logo: Logo,
    serviceName: "Alquiler",
    description: "Casa",
    amount: "$119,00",
    date: "10 May 2024"
  },
  {
    logo: Logo,
    serviceName: "Cine",
    description: "Entretenimiento",
    amount: "$7,99",
    date: "8 May 2024"
  }
]

export function TransactionList() {
  return (
    <Card className="w-full max-w-2xl p-6 bg-background">
      <h2 className="text-2xl font-semibold mb-6">Últimas Transacciones</h2>
      <div className="max-h-[28vh] overflow-y-auto space-y-4">
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            logo={transaction.logo.src}
            serviceName={transaction.serviceName}
            description={transaction.description}
            amount={transaction.amount}
            date={transaction.date}
          />
        ))}
      </div>
    </Card>
  )
}