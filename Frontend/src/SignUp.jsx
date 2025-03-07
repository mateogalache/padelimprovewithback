import { useState } from 'react'

function NameSurname(){
    return(
        <>  
            <section>
                <p className="font-semibold">Nombre</p>
                <input type="text" className="rounded-md border-black" />
            </section>
            <section>
                <p className="font-semibold">Apellidos</p>
                <input type="text" />
            </section>        
        </>
    )
}

function Email(){
    return(
        <>  
            <section>
                <p className="font-semibold">Email</p>
                <input type="text" className="rounded-md border-black" />
            </section>
            <section>
                <p className="font-semibold">Confirmar email</p>
                <input type="text" />
            </section>        
        </>
    )
}

function Password(){
    return(
        <>  
            <section>
                <p className="font-semibold">Contraseña</p>
                <input type="text" className="rounded-md border-black" />
            </section>
            <section>
                <p className="font-semibold">Confirmar contraseña</p>
                <input type="text" />
            </section>        
        </>
    )
}

function Code(){
    return(
        <>  
            <section>
                <p className="font-semibold">Code</p>
                <input type="text" className="rounded-md border-black" />
            </section>      
        </>
    )
}

function ShowPart() {
    if(part==1) return (
        <>
            <NameSurname></NameSurname>
        </>
    )
    if(part==2) return (
        <>
            <Email></Email>
        </>
    )
    if(part==3) return (
        <>
            <Password></Password>
        </>
    )
    if(part==4) return (
        <>
            <Code></Code>
        </>
    )
}

export function SignUp() {

    function nextPart(){
        if (part==1) 
        {
                localStorage.setItem('Name',"Mateo")
                localStorage.setItem('Surname',"Galache")
        }
        if (part==2) 
        {
                localStorage.setItem('Email',"mateogalache12@gmail.com")
        }
        if (part==3) 
        {
                localStorage.setItem('Password',"Passwordok")
        }
        console.log(localStorage);
        setPart(part + 1);
    }
    function prevPart(){
        setPart(part - 1);
    }

    const [part, setPart] = useState(1);
    if(part==1) return (
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
                        <button onClick={nextPart} className="bg-black p-2 px-5 rounded-2xl font-bold">SIGUIENTE</button>
                    </section>
                </div>
            </div>
        </div>
    )
    if(part==2) return (
        <div>
            <div className="flex flex-row min-h-screen justify-center items-center ">
                <div className="third-color p-6 px-10 rounded-2xl text-white gap-4 flex flex-col">
                    <h1 className="flex justify-center font-bold text-2xl">SIGN UP</h1>
                    <section>
                        <p className="font-semibold">Email</p>
                        <input type="text" className="rounded-md border-black" />
                    </section>
                    <section>
                        <p className="font-semibold">Confirmar email</p>
                        <input type="text" />
                    </section>  
                    <section className=" flex justify-between">
                        <button onClick={prevPart} className="bg-white text-black p-2 px-5 rounded-2xl font-bold">ATRÁS</button>
                        <button onClick={nextPart} className="bg-black p-2 px-5 rounded-2xl font-bold">SIGUIENTE</button>
                    </section>
                </div>
            </div>
        </div>
    )
    if(part==3) return (
        <div>
            <div className="flex flex-row min-h-screen justify-center items-center ">
                <div className="third-color p-6 px-10 rounded-2xl text-white gap-4 flex flex-col">
                    <h1 className="flex justify-center font-bold text-2xl">SIGN UP</h1>
                    <section>
                        <p className="font-semibold">Contraseña</p>
                        <input type="text" className="rounded-md border-black" />
                    </section>
                    <section>
                        <p className="font-semibold">Confirmar contraseña</p>
                        <input type="text" />
                    </section>  
                    <section className=" flex justify-between">
                        <button onClick={prevPart} className="bg-white text-black p-2 px-5 rounded-2xl font-bold">ATRÁS</button>
                        <button onClick={nextPart} className="bg-black p-2 px-5 rounded-2xl font-bold">SIGUIENTE</button>
                    </section>
                </div>
            </div>
        </div>
    )
    if(part==4) return (
        <div>
            <div className="flex flex-row min-h-screen justify-center items-center ">
                <div className="third-color p-6 px-10 rounded-2xl text-white gap-4 flex flex-col">
                    <h1 className="flex justify-center font-bold text-2xl">SIGN UP</h1>
                    <section>
                        <p className="font-semibold">Código</p>
                        <input type="text" className="rounded-md border-black" />
                    </section> 
                    <section className=" flex justify-center">
                        <button className="bg-black p-2 px-5 rounded-2xl font-bold">ACEPTAR</button>
                    </section>
                </div>
            </div>
        </div>
    )
}