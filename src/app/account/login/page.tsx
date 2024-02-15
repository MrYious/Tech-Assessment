'use client'

export default function Login() {
    return (
        <main className="flex min-h-screen justify-center items-center">
            {/* SIGNIN */}
            <div className="flex flex-col p-5 gap-2 w-1/3 border-[1px] border-gray-200 rounded bg-white shadow-md shadow-gray-500">
                <h1 className="text-center font-bold text-2xl">SIGN IN</h1>
                <form onSubmit={()=>{}} className="flex flex-col gap-3">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required
                        className="p-1 outline-none border-[1px] border-gray-300"
                    />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required
                        className="p-1 outline-none border-[1px] border-gray-300"
                    />
                    <button className="p-2 bg-green-700 rounded hover:bg-green-800 text-white font-bold">
                        SUBMIT
                    </button>
                </form>
            </div>
        </main>
    );
}
