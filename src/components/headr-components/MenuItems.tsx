import { MenuItemType } from "@/types/Menu.Props";
import { List, ListItem, MenuItem, Modal, Select } from "@mui/material";
import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';


export default function MenuItemsSelect({ items, isOpen, setIsOpen, openIndex }: { items: MenuItemType[], isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean[]>>, openIndex: number }) {

    function closeModal(){
        setIsOpen(prev => {
            const newOpen = [...prev]
            newOpen[openIndex] = !newOpen[openIndex]
            return newOpen
        })
    }

    return (
        <Paper sx={{width : 230}}>
            <MenuList>
                {items.map((el) => (
                    <MenuItem id={String(el.id)} key={el.id} value={el.id} sx={{cursor : "pointer"}}>
                        <div className="flex items-center gap-2" onClick={closeModal}>
                            {el.icon}
                            <h1>{el.name}</h1>
                        </div>
                    </MenuItem>
                ))}
            </MenuList>
        </Paper>
    );
}

