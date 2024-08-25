import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
export default function ContactList({ contactsList = [], onDelete}) {

    return (
        <ul className={css.list}>
      {contactsList.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </li>
      ))}
    </ul>
    )
}