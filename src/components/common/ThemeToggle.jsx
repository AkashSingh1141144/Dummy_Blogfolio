import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { toggleTheme, setTheme } from "../../features/ui/uiSlice"
import { useEffect } from "react"

export default function ThemeToggle() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.ui.theme)

  // Mount hone par localStorage se theme restore hoga
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      dispatch(setTheme(savedTheme))
    }
  }, [dispatch])

  // DOM par theme apply karne ke liye
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}
