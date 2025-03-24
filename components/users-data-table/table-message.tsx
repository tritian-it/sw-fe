import { TableRow, TableCell } from "../ui/table";

interface TableMessageProps {
  colspan: number;
  message: string;
  isError?: boolean;
}

export function TableMessage({
  colspan,
  message,
  isError = false,
}: TableMessageProps) {
  return (
    <TableRow>
      <TableCell
        colSpan={colspan}
        className={`h-24 text-center ${isError ? "text-red-500" : ""}`}
      >
        {message}
      </TableCell>
    </TableRow>
  );
}
