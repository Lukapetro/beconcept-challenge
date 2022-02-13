import React from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import { useTranslation } from 'react-i18next';
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Select,
  Input,
  Badge
} from '@windmill/react-ui'


function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <Input
      value={value || ""}
      onChange={e => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`${count} pages...`}
      style={{
        fontSize: '1.1rem',
        border: '0',
        maxWidth: 500
      }}
    />
  )
}

function VitalsTable() {
  const { t } = useTranslation();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Page',
        accessor: 'col1',
      },
      {
        Header: 'Loading time',
        accessor: 'col2',
      },
      {
        Header: 'Score',
        accessor: 'col3',
      },
    ],
    []
  )

  const data = React.useMemo(
    () => [
      {
        col1: 'HomePage',
        col2: 1.1,
        col3: <Badge type="success">98</Badge>,
      },
      {
        col1: 'Test',
        col2: 1.2,
        col3: <Badge type="success">99</Badge>,
      },
      {
        col1: 'Lorem',
        col2: 2,
        col3: <Badge type="warning">50</Badge>
      },
      {
        col1: 'Ipsum',
        col2: 6,
        col3: <Badge type="danger">3</Badge>
      },
      {
        col1: 'Page #100',
        col2: 0,
        col3: <Badge type="success">100</Badge>
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters, // useFilters!
    useGlobalFilter // useGlobalFilter!
  )

  return <div className="mb-12">
    <div className='flex items-center gap-6 mb-8'>
      <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">{t('vitals_section_title_2')}</h2>
      <Select style={{ width: 100 }}>
        <option>AND</option>
        <option>OR</option>
        <option>NOT</option>
      </Select>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </div>

    <TableContainer>
      <Table {...getTableProps()}>
        <TableHeader>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}

        </TableHeader>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
}

export default VitalsTable
