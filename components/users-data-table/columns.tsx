import { User } from "@/interfaces/user"
import { ColumnDef } from "@tanstack/react-table"
import { SortButton } from "./sort-button"

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
        return (
            <SortButton column={column} name="ID" />
        )
      },
    cell: ({ row }) => (
      <div>{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <SortButton column={column} name="Name" />
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "surname",
    header: ({ column }) => {
      return (
        <SortButton column={column} name="Surname" />
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("surname")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <SortButton column={column} name="Email" />
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
]