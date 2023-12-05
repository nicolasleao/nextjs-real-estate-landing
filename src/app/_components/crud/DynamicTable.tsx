import { ReactNode } from "react";

interface DynamicTableHeader {
  label: string;
  key: string;
}

interface DynamicTableProps {
  headers: DynamicTableHeader[];
  rows: any[];
  action?: ReactNode;
  emptyFallback?: ReactNode;
}

interface DynamicTableRowProps {
  headers: DynamicTableHeader[];
  row: any;
  action?: ReactNode;
}

function DynamicTableRow({ headers, row, action }: DynamicTableRowProps) {
  return (
    <tr className="hover:bg-gray-100">
      {headers.map((header) => (
        <td
          key={header.key}
          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
        >
          {row[header.key]}
        </td>
      ))}
      {!!action && (
        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
          {action}
        </td>
      )}
    </tr>
  );
}

function DynamicTable({
  headers,
  rows,
  action,
  emptyFallback,
}: DynamicTableProps) {
  if (!!emptyFallback && !rows.length)
    return <div className="p-10 my-2">{emptyFallback}</div>;
  return (
    <div className="flex flex-col w-full my-2 border rounded">
      <div className="min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                {headers.map((header) => (
                  <th
                    key={header.key}
                    scope="col"
                    className="px-6 py-3 text-start text-xs text-gray-500 uppercase"
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, i) => {
                return (
                  <DynamicTableRow
                    headers={headers}
                    row={row}
                    action={action}
                    key={`table-item-${i}`}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DynamicTable;
