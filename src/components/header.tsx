import moonIcon from '../assets/moon.svg'
import sunIcon from '../assets/sun.svg'

export default function Header() {

    function toggleMode() {
        console.log('mode changed');

    }

    return (
        <div className="w-full h-[10%] flex items-center justify-between bg-red-200">
            <span className="text-white text-3xl font-semibold">T O D O</span>
            <button className='w-7 h-7' onClick={toggleMode}>
                <img className='w-7 h-7' src={sunIcon} alt="" />
            </button>
        </div>
    )
}
