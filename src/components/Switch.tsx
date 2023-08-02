type Props = {
    active: boolean
    onClick: (value: boolean) => void
}

function Switch(props: Props) {
    const { active, onClick } = props
    return (
        <div
            className={`relative h-4 w-11 rounded-full transition-all duration-200 ease-in-out ${
                active ? 'bg-primary-100 bg-opacity-70' : 'bg-gray-300'
            }`}
        >
            <div
                onClick={() => onClick(!active)}
                className={`absolute -top-1/4 h-6 w-6 rounded-full ${
                    active ? 'right-0 bg-primary' : 'left-0 bg-secondary'
                }  transition-all duration-200 ease-in-out`}
            />
        </div>
    )
}

export default Switch
