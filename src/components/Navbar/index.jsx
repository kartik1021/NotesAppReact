import logo from '../../assets/notesLogo2.png';

export const Navbar = ()=>{
    return(
        <header className='flex px-5 py-2 gap-3 border-b-2 border-gray-100 items-center'>
    <div className='w-8 h-8 md:w-12 md:h-12'> {/* Smaller logo on mobile */}
        <img className='w-full h-full' src={logo} alt='logo' />
    </div>
    <h1 className='text-indigo-800 text-2xl md:text-4xl font-bold'>NoteIt</h1> {/* Smaller text on mobile */}
</header>
    )
}