
export type GroupCreateType = {
    name: string,
    startDate: string,
    daysOfWeek: string,
    monthDuration: string
}

export const groupInputs :Array<{
    name: keyof GroupCreateType,
    label: string,
    placeholder: string,
    key: keyof GroupCreateType,
    type: string
}> = [
    {
        name: "name",
        label: "Guruh nomi",
        placeholder: "Guruh nomini kiriting",
        key: "name",
        type: "text"
    },
    {
        name: "startDate",
        label: "Boshlanish sanasi",
        placeholder: "Sanani tanlang",
        key: "startDate",
        type: "date"
    },
    {
        name: "daysOfWeek",
        label: "Haftalik kunlar soni",
        placeholder: "Son kiriting",
        key: "daysOfWeek",
        type: "number"
    },
    {
        name: "monthDuration",
        label: "Davomiyligi (oy)",
        placeholder: "Oy sonini kiriting",
        key: "monthDuration",
        type: "number"
    }
]