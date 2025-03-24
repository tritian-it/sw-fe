import React from "react"
import { Column } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { ArrowUpDown } from "lucide-react"
import { User } from "@/interfaces/user"

interface SortButtonProps {
  column: Column<User, unknown>
  name: string
}

export function SortButton({ column, name }: SortButtonProps) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {name}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  )
}