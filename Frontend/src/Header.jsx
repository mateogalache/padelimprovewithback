export function Header() {
    return (
        <header className='bg-black justify-between flex text-white p-4 px-10 items-center'>
            <button>Explore</button>
            <h1 className="primary-color font-bold text-3xl">PADEL IMPROVE</h1>
            <div className="flex items-center gap-3">
                <a href="/signup"><button className="border-2 rounded-3xl p-[8px] primary-color">Sign Up</button></a>
                <a href=""><button className="border-2 rounded-3xl p-[8px] bg-primary-color border-primary-color text-black">Log in</button></a>
            </div>
        </header>
    )
}