import { Trash2 } from "lucide-react"
import styles from "./task-manager.module.css"

export type TaskItem = { id: string; title: string; completed: boolean }
type TaskProps = {
  task: TaskItem
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function Task({ task, onToggle, onDelete }: TaskProps) {
  return (
    <li className={`${styles.task} ${task.completed ? styles.completed : ""}`}>
      <label className={styles.taskLabel}>
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
        <span>{task.title}</span>
      </label>
      <button type="button" className={styles.delete} onClick={() => onDelete(task.id)} aria-label={`Șterge sarcina: ${task.title}`}><Trash2 size={16} aria-hidden="true" /><span>Șterge</span></button>
    </li>
  )
}
