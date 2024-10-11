"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"



const chartData = [
  { category: "Casa", amount: 275, fill: "var(--color-chrome)" },
  { category: "Comida", amount: 200, fill: "var(--color-safari)" },
  { category: "Transporte", amount: 287, fill: "var(--color-firefox)" },
  { category: "Otros", amount: 173, fill: "var(--color-edge)" },
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
export function ChartPieDonutText() {
  const totalAmount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Gastos por Categoría</CardTitle>
        <CardDescription className="text-sm">Mes de Octubre</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between items-center pb-4 pt-0">
        <ChartContainer
          config={chartConfig}
          className="w-[200px] h-[200px]"
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
              innerRadius={50}
              outerRadius={80}
              strokeWidth={2}
              paddingAngle={2}
              cornerRadius={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chartConfig[entry.category as keyof typeof chartConfig].color} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalAmount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-muted-foreground text-xs"
                        >
                          Monto
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="flex flex-col gap-2">
          {chartData.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartConfig[entry.category as keyof typeof chartConfig].color }} />
              <span className="text-sm" style={{ color: chartConfig[entry.category as keyof typeof chartConfig].color }}>
                {chartConfig[entry.category as keyof typeof chartConfig].label}
              </span>
              <span className="text-sm font-medium">{entry.amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}