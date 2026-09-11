export type Employee = {
  id: number
  name: string
  department: string
  salary: number
  experience: number
}

export const employees: Employee[] = [
  { id: 1, name: "Ana Popescu", department: "IT", salary: 8000, experience: 5 },
  { id: 2, name: "Ion Ionescu", department: "HR", salary: 4500, experience: 2 },
  { id: 3, name: "Maria Dumitru", department: "IT", salary: 9500, experience: 7 },
  { id: 4, name: "Andrei Stan", department: "Vânzări", salary: 5200, experience: 3 },
  { id: 5, name: "Elena Radu", department: "Marketing", salary: 6100, experience: 4 },
  { id: 6, name: "Mihai Georgescu", department: "Vânzări", salary: 4800, experience: 1 },
  { id: 7, name: "Ioana Marin", department: "HR", salary: 5000, experience: 6 },
  { id: 8, name: "Vlad Constantin", department: "IT", salary: 7200, experience: 2 },
]

// Filtrarea angajaților după departament.
export const filterByDepartment = (list: Employee[], department: string) =>
  list.filter((employee) => employee.department === department)

// Gruparea angajaților după departament.
export const groupByDepartment = (list: Employee[]) =>
  list.reduce<Record<string, Employee[]>>((groups, employee) => {
    const { department } = employee
    return { ...groups, [department]: [...(groups[department] ?? []), employee] }
  }, {})

// Salariul mediu.
export const averageSalary = (list: Employee[]) =>
  list.length === 0
    ? 0
    : list.reduce((sum, { salary }) => sum + salary, 0) / list.length

// Angajații cu experiență mai mare de 3 ani.
export const experiencedEmployees = (list: Employee[], minYears = 3) =>
  list.filter(({ experience }) => experience > minYears)

// Majorarea salariului cu 10% pentru angajații cu experiență > 3 ani.
export const applyRaise = (list: Employee[], percent = 10, minYears = 3) =>
  list.map((employee) =>
    employee.experience > minYears
      ? { ...employee, salary: Math.round(employee.salary * (1 + percent / 100)) }
      : employee
  )

// Raport final folosind template literals.
export const buildReport = (list: Employee[]) => {
  const groups = groupByDepartment(list)
  const experienced = experiencedEmployees(list)
  const raised = applyRaise(list)

  const departmentLines = Object.entries(groups)
    .map(
      ([department, members]) =>
        `  ${department}: ${members.length} angajați, salariu mediu ${averageSalary(members).toFixed(0)} lei`
    )
    .join("\n")

  const experiencedLines = experienced
    .map(({ name, experience }) => `  - ${name} (${experience} ani)`)
    .join("\n")

  return `Raport angajați
Total angajați: ${list.length}
Salariu mediu: ${averageSalary(list).toFixed(0)} lei

Pe departamente:
${departmentLines}

Angajați cu experiență > 3 ani (${experienced.length}):
${experiencedLines}

Salariu mediu după majorarea de 10%: ${averageSalary(raised).toFixed(0)} lei`
}
