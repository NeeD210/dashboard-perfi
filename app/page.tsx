import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import LineChartGradient from "@/components/dashboard/line-chart-gradient";
import { ChartPieDonut } from "@/components/chart-pie-donut";
import { TransactionList } from "@/components/transaction-list";
import { ChartPieDonutText } from "@/components/chart-pie-donut-text";
export default function Home() {
  return (
    <>
      <div className="flex p-4 space-x-4 h-[calc(100vh-15vh)]">
        <div className="flex-col w-4/6 justify-between h-full space-y-4">
          <div className="flex w-full h-1/4 space-x-4">
          <Card className="flex-col  w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
              <CardTitle className="text-2xl font-semibold">
                Balance Octubre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl">$45.231</div>
              <p className="text-sm text-muted-foreground pt-2">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="flex-col  w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
              <CardTitle className="text-2xl font-semibold">
                Pagos Noviembre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl">$180.000</div>
              <p className="text-sm text-muted-foreground pt-2">
                +30% de los ingresos del mes
              </p>
            </CardContent>
          </Card>
          <Card className="flex-col  w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-semibold">
                Ahorros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl">$500.000</div>
              <p className="text-sm text-muted-foreground pt-2">
                4 meses de gastos
              </p>
            </CardContent>
          </Card>
          </div>
          <LineChartGradient />
        </div>
        <div className="flex-col w-2/6 justify-between h-full space-y-4">
          <ChartPieDonutText />
          <TransactionList />
        </div>
      </div>
    </>
    
  );
}
