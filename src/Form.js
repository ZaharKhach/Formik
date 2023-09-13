import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const CustomForm = () => {

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Минимум 2 символа!')
                    .required('Обазательное поле!'),
                email: Yup.string()
                    .email('Неправильный email адрес')
                    .required('Обазательное поле!'),
                amount: Yup.number()
                    .min(5, 'Не менее 5!')
                    .required('Обязательное поле'),
                currency: Yup.string().required('Обязательное поле'),
                text: Yup.string()
                    .min(10, 'не мнее 10 символов'),
                terms: Yup.boolean()
                    .required('Необходимо согласие!')
                    .oneOf([true], 'Необходимо согласие!')
            })}
            onSubmit={(values) => {
                console.log(JSON.stringify(values, null, 2))
            }}
        >

            <Form className="form">
                <h2>Отправить пожертвование</h2>
                <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <ErrorMessage style={{ color: 'red' }} name='name' component='div' />
                <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage style={{ color: 'red' }} name='email' component='div' />
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage style={{ color: 'red' }} name='amount' component='div' />
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select">
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage style={{ color: 'red' }} name='currency' component='div' />
                <label htmlFor="text">Ваше сообщение</label>
                <Field
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage style={{ color: 'red' }} name='text' component='div' />

                <label className="checkbox">
                    <Field
                        name="terms"
                        type="checkbox"
                    />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage style={{ color: 'red' }} name='terms' component='div' />

                <button type="submit">Отправить</button>
            </Form>

        </Formik >
    )
}

export default CustomForm;


// const validate = values => {
//     const errors = {};

//     if (!values.name) {
//         errors.name = 'Обязательное поле!'
//     } else if (values.name.length < 2) {
//         errors.name = 'Минимум два символа для заполнения!'
//     }

//     if (!values.email) {
//         errors.email = 'Обязательное поле!'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Неправильный email адрес!'
//     }

//     return errors;
// }


// const formik = useFormik({
//     initialValues: {
//         name: '',
//         email: '',
//         amount: 0,
//         currency: '',
//         text: '',
//         terms: false
//     },

// });
