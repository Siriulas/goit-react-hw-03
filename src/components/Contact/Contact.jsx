import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css"
export default function Contact({ id, name, number, onDelete }) {
     const handleDelete = () => {
        onDelete(id);
    };
    return (
        <>
            <div className={css.listItem}>
                <div>
                    <div className={css.info}>
                        <FaUser className={css.icon}/>
                        <p>{name}</p>
                    </div>
                    <div className={css.info}>
                        <FaPhoneAlt className={css.icon}/>
                        <p>{number}</p>
                    </div>
                </div>
                <button className={css.button} onClick={handleDelete} type="button">Delete</button>
        </div>
        </>
)
}