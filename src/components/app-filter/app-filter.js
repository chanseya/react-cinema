import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все фильмы'},
        {name: 'rise', label: 'Любимые'},
        {name: 'byGrade', label: 'По оценкам'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
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