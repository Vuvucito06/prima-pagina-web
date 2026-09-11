"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  type Employee,
  applyRaise,
  averageSalary,
  buildReport,
  employees as initialEmployees,
  filterByDepartment,
  groupByDepartment,
} from "@/lib/employees"

const formatSalary = (value: number) => `${value.toFixed(0)} lei`

export function EmployeesReport() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees)
  const [department, setDepartment] = useState<string>("Toate")
  const [raised, setRaised] = useState(false)

  const departments = ["Toate", ...Object.keys(groupByDepartment(employees))]
  const visible =
    department === "Toate"
      ? employees
      : filterByDepartment(employees, department)

  const handleRaise = () => {
    setEmployees((current) => applyRaise(current))
    setRaised(true)
  }

  const handleReset = () => {
    setEmployees(initialEmployees)
    setRaised(false)
  }

  return (
    <section className="space-y-4 rounded-lg border bg-card p-4">
      <h2 className="text-xl font-semibold">Angajați</h2>

      <div className="flex flex-wrap items-center gap-2">
        {departments.map((name) => (
          <Button
            key={name}
            type="button"
            size="sm"
            variant={name === department ? "default" : "outline"}
            onClick={() => setDepartment(name)}
          >
            {name}
          </Button>
        ))}
        <span className="ml-auto text-sm text-muted-foreground">
          Salariu mediu: <strong>{formatSalary(averageSalary(visible))}</strong>
        </span>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nume</TableHead>
              <TableHead>Departament</TableHead>
              <TableHead className="text-right">Salariu</TableHead>
              <TableHead className="text-right">Experiență</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visible.map(({ id, name, department, salary, experience }) => (
              <TableRow
                key={id}
                className={experience > 3 ? "bg-primary/5" : undefined}
              >
                <TableCell>{id}</TableCell>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>{department}</TableCell>
                <TableCell className="text-right">{formatSalary(salary)}</TableCell>
                <TableCell className="text-right">{experience} ani</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center gap-2">
        <Button type="button" onClick={handleRaise} disabled={raised}>
          Majorează cu 10% (experiență &gt; 3 ani)
        </Button>
        <Button type="button" variant="outline" onClick={handleReset}>
          Resetează
        </Button>
        <span className="text-xs text-muted-foreground">
          Rândurile evidențiate au experiență &gt; 3 ani.
        </span>
      </div>

      <pre className="overflow-x-auto rounded-md bg-muted p-3 text-xs leading-relaxed whitespace-pre">
        {buildReport(employees)}
      </pre>
    </section>
  )
}
