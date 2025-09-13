import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAll, clearAll, checkingById, deleteById } from "../features/todoSlice"
import { Delete, Edit } from '@mui/icons-material';
import EditTodoModal from './Edit.Modal';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'todoName', headerName: 'Todo Name', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    {
        field: 'createdAt',
        headerName: 'createdAt',
        type: 'number',
        width: 90,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 60,
    }
];

const paginationModel = { pcreatedAt: 0, pcreatedAtSize: 5 };

export default function DataTable({ filter }) {

    const todos = useSelector(state => state.todos)
    const todoController = useDispatch()
    const [isOpenEditModal, setIsOpenEditModal] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null)
    const handleEdit = (row) => {
        setSelectedItem(row)
        setIsOpenEditModal(!isOpenEditModal)
    }

    const filteredTodo = React.useMemo(() => {
        console.log(filter)
        return todos.filter(todo => filter === "all" || todo.status === filter)
    }, [filter,todos])
    return (
        <div className="relative w-full h-full">
            <div className="container mx-auto px-10 min-h-[480px]  shadow-2xl py-10">
                <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {/* <TableCell sx={{ borderRight: 1 }}>
                                    <Input content='input' type='checkbox'></Input>
                                </TableCell> */}
                                {columns.map((column, index) => (
                                    <TableCell
                                        key={index + "_column"}
                                        sx={{
                                            width: column.width,
                                            borderRight: 2,
                                            backgroundColor: "background.paper", // theme ga mos bo'lishi uchun
                                            fontWeight: "bold"
                                        }}
                                        title={column.description ? column.description : column.headerName}
                                    >
                                        {column.headerName}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {filteredTodo.map((row, rowIndex) => (
                                <TableRow key={rowIndex + "_row"}>
                                    {/* <TableCell sx={{ width: 5, borderRight: 1 }}>
                                        <Input type='checkbox' onClick={() => todoController(checkingById(row.id))}></Input>
                                    </TableCell> */}
                                    {Object.keys(row).map((field, cellIndex) => (
                                        <TableCell
                                            sx={{ borderRight: 2 }}
                                            key={cellIndex + "_cell"} 
                                        >
                                            <p className={field === "status" ? row[field] === "active" ? "text-blue-800" : "text-green-600" : "text-violet-500"}>{row[field]}</p>
                                        </TableCell>
                                    ))}

                                    <TableCell>
                                        <div className="flex space-x-4">
                                            <Button color='error' onClick={() => {
                                                console.log(row)
                                                todoController(deleteById(row))
                                            }}>
                                                <Delete></Delete>
                                            </Button>
                                            <Button onClick={() => handleEdit(row)}>
                                                <Edit></Edit>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={`absolute ${isOpenEditModal ? "" : "hidden"}`}>
                <EditTodoModal target={selectedItem} isOpen={isOpenEditModal} setIsOpen={setIsOpenEditModal} />
            </div>
        </div>
    );
}
