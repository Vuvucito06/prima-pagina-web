import { type FormEvent, useState } from "react"
import { Plus } from "lucide-react"
import styles from "./task-manager.module.css"

type TaskFormProps = { onAddTask: (title: string) => void }

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [taskName, setTaskName] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!taskName.trim()) return
    onAddTask(taskName.trim())
    setTaskName("")
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.srOnly} htmlFor="task-name">Denumirea sarcinii</label>
      <input id="task-name" value={taskName} onChange={(event) => setTaskName(event.target.value)} placeholder="Introdu denumirea sarcinii" autoComplete="off" required />
      <button type="submit" disabled={!taskName.trim()}><Plus size={18} aria-hidden="true" /> Adaugă</button>
    </form>
  )
}
