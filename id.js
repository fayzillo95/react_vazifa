

// const ids = []

// for (let i = 0; i < 900; i++) {
//     console.log("A" + "".padStart((`1000`.length - `${i}`.length),"0"))    
// }


const today = new Date()
console.log(today.getDay(),today)

let i = 0
let days = []
while(i < (31* 4 )){
    i++
    today.setDate(today.getDate() + 1)
    if([1,3,5].includes(today.getDay())){
        days.push({
            date : today.toISOString().split("T")[0],
            weekday : {
                inDigit : today.getDay(),
                inString : today.toLocaleString({},{weekday : "long"})
            },
            year : today.getFullYear(),
            month : {
                inDigit : today.getMonth(),
                inString : today.toLocaleString({},{month : "long"})
            }
        })
    }
}
