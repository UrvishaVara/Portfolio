const Button = ({ buttonName, onClick, type = "button", classNames }) => {
    return (
        <button type={type} onClick={onClick} className={`rounded-lg bg-orange-800 hover:bg-orange-900 w-36 border border-x-white px-2 py-3 my-5 ${classNames}`}>{buttonName}</button>
    )
}

export default Button