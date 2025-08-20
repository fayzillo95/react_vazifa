
function Register() {
    return (
        <div className="flex w-[850px] h-[550px] shadow-[10px_10px_10px_rgba(1,1,1,0.5)] justify-center items-center rounded-3xl mx-auto bg-gradient-to-b from-violet-600 to-purple-200 backdrop-blur-3xl">
            <form className="w-[400px] h-[500px] border-2 rounded-2xl flex flex-col gap-y-[20px] items-center bg-transparent">
                <div>
                    <h1 className="bg-gradient-to-r from-red-400 to-green-600 bg-clip-text w-auto inline text-transparent font-extrabold text-[20px]">Register</h1>
                </div>
                <div className="flex flex-col gap-2 w-[380px] bg-transparent">
                    <label htmlFor="" className="text-[18px] font-extrabold bg-gradient-to-r from-violet-950 to-orange-950 tracking-widest bg-clip-text text-transparent inline">
                        First Name
                    </label>
                    <input className="w-full border-2 px-2 py-2 bg-transparent rounded-2xl" type="text" placeholder="First Name ..." />
                </div>

                <div className="flex flex-col gap-2 w-[380px] bg-transparent">
                    <label htmlFor="" className="text-[18px] font-extrabold bg-gradient-to-r from-violet-950 to-orange-950 tracking-widest bg-clip-text text-transparent inline">
                        Last Name
                    </label>
                    <input className="w-full border-2 px-2 py-2 bg-transparent rounded-2xl" type="text" placeholder="Last Name ..." />
                </div>

                <div className="flex flex-col gap-2 w-[380px] bg-transparent">
                    <label htmlFor="" className="text-[18px] font-extrabold bg-gradient-to-r from-violet-950 to-orange-950 tracking-widest bg-clip-text text-transparent inline">
                        Email
                    </label>
                    <input className="w-full border-2 px-2 py-2 bg-transparent rounded-2xl" type="text" placeholder="Email ..." />
                </div>

                <div className="flex flex-col gap-2 w-[380px] bg-transparent">
                    <label htmlFor="" className="text-[18px] font-extrabold bg-gradient-to-r from-violet-950 to-orange-950 tracking-widest bg-clip-text text-transparent inline">
                        Password
                    </label>
                    <input className="w-full border-2 px-2 py-2 bg-transparent rounded-2xl" type="password" placeholder="Password ..." />
                </div>
                <button className="px-4 border-none py-1.5 bg-blue-700 rounded-[25px] inline">Submit</button>
            </form>
            <div className="w-[400px] h-[500px] border-2">

            </div>
        </div>
    )
}


export default Register