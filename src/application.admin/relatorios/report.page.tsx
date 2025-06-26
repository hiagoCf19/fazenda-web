import { useState } from "react";
import { format } from "date-fns"; // Para formatar datas
import { ptBR } from "date-fns/locale"; // Para formatação em português
import { Calendar as CalendarIcon } from "lucide-react";

// Shadcn UI Components
import { Card, CardContent, CardHeader, CardTitle } from "../../shadcn/ui/card";
import { Label } from "../../shadcn/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shadcn/ui/select";
import { Button } from "../../shadcn/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../shadcn/ui/table";
import { Skeleton } from "../../shadcn/ui/skeleton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../shadcn/ui/popover";

// Hook para o histórico de relatórios
import type { DataBy, ReportType } from "../../service/reports.service";
import { useReportsHistory } from "../../hooks/use.reports.history";
import { Calendar } from "../../shadcn/ui/calendar";
import { Separator } from "../../shadcn/ui/separator";

const ReportsEmissionPage = () => {
  const [reportType, setReportType] = useState<ReportType>("Pedidos");
  const [dataBy, setDataBy] = useState<DataBy>("Mês");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const {
    data: historicalReports,
    isLoading: isLoadingHistory,
    isError: isErrorHistory,
    error: historyError,
  } = useReportsHistory();

  const handleGenerateReport = () => {
    console.log("Gerar relatório com:", {
      reportType,
      dataBy,
      startDate: startDate ? format(startDate, "dd/MM/yyyy") : null,
      endDate: endDate ? format(endDate, "dd/MM/yyyy") : null,
    });
  };

  const handleViewReport = (reportId: string) => {
    console.log("Visualizar relatório:", reportId);
  };

  return (
    <section className="space-y-6 md:space-y-8 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-zinc-800 mb-6">
          Emissão de relatórios
        </h1>

        {/* --- Seção Novo Relatório --- */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">
              Novo relatório
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Tipo de relatório */}
            <div className="space-y-2">
              <Label htmlFor="report-type">Tipo de relatório</Label>
              <Select
                value={reportType}
                onValueChange={(value) => setReportType(value as ReportType)}
              >
                <SelectTrigger
                  id="report-type"
                  className="w-full rounded-md border-gray-300"
                >
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pedidos">Pedidos</SelectItem>
                  <SelectItem value="Clientes">Clientes</SelectItem>
                  <SelectItem value="Produtores">Produtores</SelectItem>
                  <SelectItem value="Entregadores">Entregadores</SelectItem>
                  <SelectItem value="Produtos">Produtos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Exibir dados por - AGORA COM BUTTONS */}
            <div className="space-y-2 col-span-full md:col-span-1">
              <Label>Exibir dados por</Label>
              <div className="flex gap-2">
                {" "}
                {/* Container para os botões */}
                <Button
                  size="sm" // Tamanho pequeno para botões de opção
                  onClick={() => setDataBy("Semana")}
                  className={`${
                    dataBy === "Semana"
                      ? "text-green-600 border-green-100 bg-green-300" // Estilo selecionado (verde)
                      : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200" // Estilo não selecionado (cinza)
                  }`}
                >
                  Semana
                </Button>
                <Button
                  size="sm"
                  onClick={() => setDataBy("Mês")}
                  className={`${
                    dataBy === "Mês"
                      ? "text-green-600 border-green-100 bg-green-300"
                      : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  Mês
                </Button>
                <Button
                  size="sm"
                  onClick={() => setDataBy("Ano")}
                  className={`${
                    dataBy === "Ano"
                      ? "text-green-600 border-green-100 bg-green-300"
                      : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  Ano
                </Button>
              </div>
            </div>

            {/* Data Início */}
            <div className="space-y-2">
              <Label htmlFor="start-date">Data início</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${
                      !startDate && "text-muted-foreground"
                    }`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? (
                      format(startDate, "dd/MM/yyyy", { locale: ptBR }) // Usar locale ptBR para formatar
                    ) : (
                      <span>DD / MM / AAAA</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    //initialFocus
                    locale={ptBR}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Data Fim */}
            <div className="space-y-2">
              <Label htmlFor="end-date">Data fim</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${
                      !endDate && "text-muted-foreground"
                    }`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? (
                      format(endDate, "dd/MM/yyyy", { locale: ptBR }) // Usar locale ptBR para formatar
                    ) : (
                      <span>DD / MM / AAAA</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    //initialFocus
                    locale={ptBR}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Botão Gerar Relatório */}
            <div className="md:col-start-2 lg:col-start-3 flex items-end">
              <Button
                onClick={handleGenerateReport}
                className="w-full bg-primary hover:bg-green-700"
              >
                Gerar relatório
              </Button>
            </div>
          </CardContent>
        </Card>
        <Separator />
        {/* --- Seção Histórico --- */}
        <h2 className="text-xl font-bold text-zinc-800 mb-4 pt-6">Histórico</h2>
        <Card>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-zinc-50">
                  <TableRow>
                    <TableHead className="w-[120px] text-zinc-600 text-left">
                      Gerado em
                    </TableHead>
                    <TableHead className="w-[160px] text-zinc-600 text-left">
                      Tipo de relatório
                    </TableHead>
                    <TableHead className="w-[120px] text-zinc-600 text-left">
                      Dados por
                    </TableHead>
                    <TableHead className="w-[120px] text-zinc-600 text-left">
                      Data início
                    </TableHead>
                    <TableHead className="w-[120px] text-zinc-600 text-left">
                      Data fim
                    </TableHead>
                    <TableHead className="text-zinc-600 text-center">
                      Ação
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoadingHistory ? (
                    Array.from({ length: 5 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <Skeleton className="h-4 w-[100px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[140px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[100px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[100px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[100px]" />
                        </TableCell>
                        <TableCell className="text-center">
                          <Skeleton className="h-8 w-[80px] mx-auto" />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : isErrorHistory ? (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-center text-red-500 py-4"
                      >
                        Erro ao carregar histórico: {historyError?.message}
                      </TableCell>
                    </TableRow>
                  ) : historicalReports && historicalReports.length > 0 ? (
                    historicalReports.map((report) => (
                      <TableRow key={report.id} className="hover:bg-zinc-50">
                        <TableCell className="font-medium text-zinc-800">
                          {report.generatedOn}
                        </TableCell>
                        <TableCell className="text-zinc-700">
                          {report.reportType}
                        </TableCell>
                        <TableCell className="text-zinc-700">
                          {report.dataBy}
                        </TableCell>
                        <TableCell className="text-zinc-700">
                          {report.startDate}
                        </TableCell>
                        <TableCell className="text-zinc-700">
                          {report.endDate}
                        </TableCell>
                        <TableCell className="text-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-100 bg-green-50"
                            onClick={() => handleViewReport(report.id)}
                          >
                            Visualizar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-center text-zinc-500 py-4"
                      >
                        Nenhum relatório gerado ainda.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReportsEmissionPage;
