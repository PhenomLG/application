import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: "all", label: "Все сотрудники"},
        {name: "promote", label: "На повышение"},
        {name: "limit", label: "З/П больше 1000$"},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? "light" : "outline-light";
        return (
            <button 
                className={`btn btn-${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onToggleFilter(name)}>
            {label}
            </button>
        )
    })
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )

}

export default AppFilter;