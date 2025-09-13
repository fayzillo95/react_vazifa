import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkingAll, clearAll, checkingById, deleteById, addnew, setLocalStorage } from './features/todoSlice';
import {
  Button,
  createTheme,
  CssBaseline,
  TextField,
  ThemeProvider
} from '@mui/material';
import { Clear, DarkMode, LightMode, Menu } from '@mui/icons-material';
import DataTable from './components/Todo.List';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [filter,setFilter] = useState("all")
  const [input, setInput] = useState("");
  const [isDark, setIsDark] = useState(false);
  const AppTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light"
    }
  });
  useEffect(() => {
    dispatch(setLocalStorage())
  }, [todos])

  const [isOpenClearModal, setIsOpenClearModal] = useState(false);


  const handleAdd = (e) => {
    if(input.trim().length ===0) return
    const maxId = todos.reduce((max, todo) => max < todo.id ? todo.id : max, 0) + 1
    const newTodo = { id: maxId, todoNamae: input, status: 'active', createdAt: new Date().toDateString() }
    dispatch(addnew(newTodo))
    setInput("")
  }

  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <section className='h-screen w-full flex flex-col border-2 gap-y-10 items-center'>
        {/* Header */}
        <div className="container flex justify-between items-center px-10 py-6">
          <h1 className='text-left'>Todo App</h1>
          <Button variant='contained' onClick={() => setIsDark(!isDark)}>
            {isDark ? <LightMode /> : <DarkMode />}
          </Button>
        </div>

        <div className="container flex justify-between px-10 mx-auto">
          <div className="flex relative w-[800px] items-center">
            <TextField
              label="Todo Name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" ? handleAdd() : null}
              sx={{ width: 800 }}
            />
            <Button sx={{ py: 2 }} variant='text' onClick={(e) => handleAdd(e)}>Add</Button>
          </div>
          <div className='flex justify-end items-center'>
            <Button sx={{width : "max-content"}} onClick={() => dispatch(clearAll())}>Clear All</Button>
          </div>
          <div className='flex w-1/2 justify-end'>
            <Button className={filter === "all" ? "active_btn" : ""} sx={{ fontSize: 12 }} onClick={() => setFilter("all")}>All</Button>
            <Button className={filter === "active" ? "active_btn" : ""} sx={{ fontSize: 12 }} onClick={() => setFilter("active")}>Active</Button>
            <Button className={filter === "complieted" ? "active_btn" : ""} sx={{ fontSize: 12 }} onClick={() => setFilter("complieted")}>Not Active</Button>
          </div>
        </div>

        <DataTable filter={filter}/>

      </section>
    </ThemeProvider>
  );
}

export default App;
