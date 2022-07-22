import React, {useMemo} from "react";
import {useTable, usePagination} from "react-table";


export const Table = ({columns, data, getInfoTransaction, setPerPage, setPage, currentPage, perPage, totalPage}) => {
    const headers = useMemo(() => columns, [])
    const items = useMemo(() => {
        return data;
    })

    /*const getInfoTransaction = (code) => {
        console.log("code", code)
    }*/
    //console.log("items table", items)
    const {
            getTableProps,
            headerGroups,
            getTableBodyProps,
            page,
        pageOptions,
            nextPage,
            previousPage,
            prepareRow,
            state: { pageIndex, pageSize },
          } = useTable(
              {
                columns : headers,
                data : items,
                useControlledState: (state) => {
                  return React.useMemo(
                      () => ({
                          ...state,
                          pageIndex: currentPage,
                      }),
                      [state, currentPage]
                  );
                },
                  initialState: { pageIndex: currentPage }, // Pass our hoisted table state
                  manualPagination: true,
                  pageCount: totalPage,
              },
              usePagination
        )

    return (
        <div className="">
            <table className="min-w-full leading-normal space-y-6 rounded-2xl border-separate" {...getTableProps()} style={{borderSpacing:'0 15px'}}>
                <thead className="bg-gray-50 rounded-2xl">
                {headerGroups.map((headerGroup) => (
                    <tr className="rounded-lg" {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th className="px-5 py-4 text-left text-sm font-semibold text-gray-400 capitalize tracking-wider" {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody className="w-full" {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row)
                    return(
                        <tr onClick={()=> getInfoTransaction(row.original.numero_sm)} className="border-2 bg-[#80808008] hover:border-gray-300 hover:bg-white border-transparent hover:border-current transition duration-700 cursor-pointer rounded-2xl" {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => {
                                    return (
                                        <td className="px-5 py-5 text-sm text-gray-500" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    )
                                })
                            }
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="flex justify-between bg-red-100 p-4">
                <button
                    onClick={() => {
                        setPage(1);
                    }}
                    disabled={currentPage === 1}
                >
                    first
                </button>{' '}
                <button
                    onClick={() => {
                        setPage((s) => (s === 0 ? 0 : s - 1));
                    }}
                    disabled={currentPage === 1}
                >
                    prev
                </button>{' '}
                <button
                    onClick={() => {
                        setPage((s) => s + 1);
                    }}
                    disabled={currentPage === totalPage}
                >
                    next
                </button>{' '}
                <button
                    onClick={() => {
                        setPage(totalPage);
                    }}
                    disabled={currentPage === totalPage}
                >
                    last
                </button>{' '}
                <span>
          Page{' '}
                    <strong>
            {pageIndex} of {pageOptions.length}
          </strong>{' '}
        </span>
                <span>
          | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex}
                        min="1"
                        max={totalPage}
                        onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) : 1;
                            setPage(page);
                        }}
                        className="w-20 border-2 rounded px-2"
                    />
        </span>{' '}
                <select
                    value={perPage}
                    onChange={(e) => {
                        setPerPage(Number(e.target.value));
                    }}
                >
                    {[20, 30, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    )
}