"use client"

import { useState } from "react"
import { ClipboardList, ListChecks } from "lucide-react"
import { Task, type TaskItem } from "@/components/Task"
import { TaskForm } from "@/components/TaskForm"
import styles from "@/components/task-manager.module.css"

type Filter = "all" | "active" | "completed"
const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Toate" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Finalizate" },
]

export default function Page() {
  const [tasks, setTasks] = useState<TaskItem[]>([])
  const [filter, setFilter] = useState<Filter>("all")
  const completedCount = tasks.filter((task) => task.completed).length
  const visibleTasks = tasks.filter((task) =>
    filter === "all" || (filter === "completed" ? task.completed : !task.completed),
  )

  function addTask(title: string) {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return
    setTasks((current) => [...current, { id: crypto.randomUUID(), title: trimmedTitle, completed: false }])
  }

  function toggleTask(id: string) {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  function deleteTask(id: string) {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.brand}><ListChecks size={22} aria-hidden="true" /> ORGANIZEAZĂ-ȚI ZIUA</div>
          <h1>Task Manager<span>.</span></h1>
          <p>Un loc simplu pentru tot ce ai de făcut. Pas cu pas, sarcină cu sarcină.</p>
        </header>

        <div className={styles.stats} aria-live="polite" aria-atomic="true">
          <div><span>Total sarcini:</span><strong>{tasks.length}</strong></div>
          <div><span>Active:</span><strong>{tasks.length - completedCount}</strong></div>
          <div><span>Finalizate:</span><strong className={styles.completedNumber}>{completedCount}</strong></div>
        </div>

        <section className={styles.panel} aria-labelledby="new-task-heading">
          <h2 id="new-task-heading">Ce ai de făcut?</h2>
          <TaskForm onAddTask={addTask} />
        </section>

        <section className={styles.panel} aria-labelledby="task-list-heading">
          <div className={styles.listHeader}>
            <h2 id="task-list-heading">Sarcinile tale</h2>
            <div className={styles.filters} role="group" aria-label="Filtrează sarcinile">
              {filters.map(({ value, label }) => (
                <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>
              ))}
            </div>
          </div>
          {visibleTasks.length > 0 ? (
            <ul className={styles.list}>
              {visibleTasks.map((task) => <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />)}
            </ul>
          ) : (
            <div className={styles.empty} role="status">
              <ClipboardList size={34} strokeWidth={1.5} aria-hidden="true" />
              <h3>{tasks.length === 0 ? "Nu există sarcini momentan." : "Nu există sarcini pentru acest filtru."}</h3>
              <p>{tasks.length === 0 ? "Adaugă prima sarcină și începe să-ți organizezi ziua." : "Selectează alt filtru pentru a vedea celelalte sarcini."}</p>
            </div>
          )}
          <p className={styles.hint}>Bifează o sarcină pentru a o marca drept finalizată.</p>
        </section>
        <footer className={styles.footer}>Mai puțin haos. Mai mult progres.</footer>
      </div>
    </main>
  )
}
