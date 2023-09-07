import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='bg-gray-900 py-5 flex justify-center'>
            <Link to='/' >
                <h1 className='text-2xl font-bold text-white hover:scale-110 transition-all duartion-500'>Quiz App</h1>
            </Link>
        </header>
    )
}

export default Navbar