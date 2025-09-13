import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateTodo, setLocalStorage } from '../features/todoSlice';

export default function EditTodoModal({ target, isOpen, setIsOpen }) {
    if (!target) return "Not found 404";

    const dispatch = useDispatch();
    const id = target.id;
    const [todoInputs, setTodoInputs] = React.useState(target)


    const handleChange = (field, value) => {
        const newIput = { [field]: value }
        setTodoInputs(state => {
            return {
                ...state,
                ...newIput
            }
        })
    };

    const handLeSubmit = () => {
        dispatch(updateTodo({ id, todoInputs }))
        setIsOpen(false)
        dispatch(setLocalStorage())
    }

    React.useEffect(() => {
        setTodoInputs(target)
    }, [target])

    const renderInputs = () => {
        return Object.entries(todoInputs)
            .filter(([field]) => field !== "id" && field !== "createdAt")
            .map(([field, value]) =>
                field === "status" ? (
                    <div key={field} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={value !== "active"}
                            onChange={() =>
                                setTodoInputs(prev => ({
                                    ...prev,
                                    status: value === "active" ? "complieted" : "active"
                                }))
                            }
                        />
                        <label>{value === "active" ? "Active" : "Complieted"}</label>
                    </div>
                ) : (
                    <TextField
                        key={field}
                        label={field.toUpperCase()}
                        value={value}
                        onChange={e => handleChange(field, e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                )
            );
    };


    return (
        <div>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="edit-todo-title"
                aria-describedby="edit-todo-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={(theme) => ({
                        position: 'relative',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: theme.shadows[5],
                        p: 4,
                        borderRadius: 2,
                    })}
                >
                    <Typography id="edit-todo-title" variant="h6" component="h2">
                        Edit Todo
                    </Typography>
                    <div className='flex flex-col gap-2.5'>
                        {renderInputs()}
                    </div>
                    <div className="flex w-full justify-between">
                        <Button
                            onClick={() => setIsOpen(false)}
                            variant="contained"
                            sx={{ mt: 2 }}
                        >
                            Close
                        </Button>
                        <Button
                            onClick={() => handLeSubmit()}
                            variant="contained"
                            sx={{ mt: 2 }}
                        >
                            Submit
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
