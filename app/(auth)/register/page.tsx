export default function Register(){
    return (
    <>
    
    <div className="flex">
    <div className="flex flex-col items-center justify-center m-auto">
        <h1>Register form</h1>
        <div className="flex border border-black px-10 py-4 mt-10">
            <form action="/" method="post">
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" className="border border-black  p-1"/>

                   <label htmlFor="password">Password</label>
                   <input type="password" name="password" id="password" placeholder="Enter your password" className="border border-black  p-1"/>

                    <button type="submit" className="bg-black text-white p-1 mt-2">Login</button>
                </div>

                <div className="flex gap-2">
                    <p className="underline">forgot password ?</p>
                    <p  className="text-blue-400"> <a href="/login"> already have an account?</a>  </p>
                </div>


            </form>
        </div>
    </div>

    </div>

    
    
    </>
    )
}


