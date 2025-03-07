export function SignUp() {
    return (
        <div>
            <div className="flex flex-row min-h-screen justify-center items-center ">
                <div className="third-color p-6 px-10 rounded-2xl text-white gap-4 flex flex-col">
                    <h1 className="flex justify-center font-bold text-2xl">SIGN UP</h1>
                    <section>
                        <p className="font-semibold">Nombre</p>
                        <input type="text" className="rounded-md border-black" />
                    </section>
                    <section>
                        <p className="font-semibold">Apellidos</p>
                        <input type="text" />
                    </section>
                    <section className=" flex justify-end">
                        <button className="bg-black p-2 px-5 rounded-2xl font-bold">SIGUIENTE</button>
                    </section>
                </div>
            </div>
        </div>
    )
}