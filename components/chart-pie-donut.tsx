"use client"

import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
  { category: "Casa", amount: 10000, fill: "rgba(190, 75, 219, 0.7)" },
  { category: "Comida", amount: 3000, fill: "rgba(121, 40, 202, 0.7)" },
  { category: "Transporte", amount: 2000, fill: "rgba(72, 31, 184, 0.7)" },
  { category: "Otros", amount: 2500, fill: "rgba(67, 97, 238, 0.7)" },
]

const chartConfig = {
  amount: {
    label: "Monto",
  },
  "Casa": {
    label: "Gastos Casa",
    color: "rgba(190, 75, 219, 0.7)",
  },
  "Comida": {
    label: "Gastos Comida",
    color: "rgba(121, 40, 202, 0.7)",
  },
  "Transporte": {
    label: "Gastos Transporte",
    color: "rgba(72, 31, 184, 0.7)",
  },
  "Otros": {
    label: "Otros",
    color: "rgba(67, 97, 238, 0.7)",
  },
} satisfies ChartConfig

export function ChartPieDonut() {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-2xl font-semibold">Gastos del Mes</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              cornerRadius={5}
            />
          </PieChart>
          
        </ChartContainer>

      </CardContent>
    </Card>
  )
}