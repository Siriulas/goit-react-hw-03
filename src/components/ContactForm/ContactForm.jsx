import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from 'yup';
import css from "./ContactForm.module.css";

const UserSchema = yup.object().shape({
  name: yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 50 letters!")
    .required("This field is required!"),
  number: yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 50 letters!")
    .required("This field is required!"),
});

export default function ContactForm({ onAdd }) {
    const userID = Date.now();

    const handleSubmit = (values, { resetForm }) => {
        onAdd({
            id: userID,
            name: values.name,
            number: values.number,
        });
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <div className={css.formWrap}>
                    <label htmlFor="nameId">Name</label>
                    <Field className={css.input} type="text" id='nameId' name="name" />
                    <ErrorMessage className={css.error} name="name" component="span" />
                </div>
                <div className={css.formWrap}>
                    <label htmlFor="numberId">Number</label>
                    <Field className={css.input} type="text" id="numberId" name="number" />
                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>
                <button className={css.btn} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}