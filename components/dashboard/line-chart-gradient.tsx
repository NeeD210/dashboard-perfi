"use client";

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { useState, useEffect } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An area chart with gradient fill"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Ingresos",
    color: "hsl(var(--chart-2))", // Green (unchanged)
  },
  mobile: {
    label: "Gastos",
    color: "hsl(var(--chart-6))", // Changed to new purple color
  },
} satisfies ChartConfig

const LineChartGradient = () => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if all required components and data are available
    if (!ChartContainer || !AreaChart || !chartData) {
      setError('Some required components or data are missing');
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Card  className="w-full h-3/4">
      <CardHeader>
        <CardTitle>Balance por Mes</CardTitle>
        <CardDescription>
          Muestra los ingresos y gastos por mes
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="h-[23vw] w-full">
          {chartData && chartData.length > 0 ? (
            <AreaChart 
              accessibilityLayer
              data={chartData}
              margin={{
                right: 20,
                left: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillIngresos" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-2))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-2))"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillGastos" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-6))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-6))"
                    stopOpacity={0.2}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="mobile"
                type="natural"
                fill="url(#fillGastos)"
                fillOpacity={0.4}
                stroke="hsl(var(--chart-6))"
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="url(#fillIngresos)"
                fillOpacity={0.4}
                stroke="hsl(var(--chart-2))"
                stackId="a"
              />
            </AreaChart>
          ) : (
            <div>No data available for the chart</div>
          )}
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default LineChartGradient
