import css from './Filter.module.css'

export const Filter = ({ value, onChange }) => {
    return (<label className={css.filterLabel}>
        Filter
        <input className={css.filterInput} type="text" value={value} onChange={onChange} />
    </label>)
}