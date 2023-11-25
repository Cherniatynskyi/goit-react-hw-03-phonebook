import { Component } from 'react'
import css from './ContactForm.module.css'

export class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.currentTarget.value })
    }

    onSubmitForm = e => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.resetForm()
    }

    resetForm = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        return(
        <form className={css.form} onSubmit={this.onSubmitForm}>
            <label className={css.label} htmlFor="name">
                Name
                <input onChange={this.handleChange} value={this.state.name} className={css.input} type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />
            </label>
            <label className={css.label} htmlFor="tel">
                Number
                <input onChange={this.handleChange} value={this.state.number} className={css.input} type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required />
            </label>
            <button type='submit' className={css.formButton}>Add contact</button>
        </form>
    )
    }
}
