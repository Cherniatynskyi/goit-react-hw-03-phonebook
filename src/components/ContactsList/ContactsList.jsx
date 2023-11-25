import css from './ContactsList.module.css'

export const ContactsList = ({ contacts, deleteContact }) => {
    return (
        <div className={css.contactsContainer}>
            <ul className={css.contactsList}>
                {contacts.map(({id, name, number}) =>
                    <li key={id}>- {name}: {number}
                        <button className={css.contactsButton} onClick={()=>{deleteContact(id)}}>delete</button>
                    </li>)}
            </ul>
        </div>
    )
}