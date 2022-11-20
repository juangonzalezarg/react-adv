import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Debe de tener 2 caracteres o más')
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('Email no es válido')
                        .required('Requerido'),
                    password1: Yup.string()
                        .min(6, 'Debe de tener 6 caracteres o más')
                        .required('Requerido'),
                    password2: Yup.string()
                        .oneOf([Yup.ref('password1')], 'Las contraseñas deben de ser iguales')
                        .required('Requerido')
                })}
            >

                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput
                                label="Name"
                                name="name"
                                placeholder="Name"
                            />

                            <MyTextInput
                                label="Email"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />

                            <MyTextInput
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="Password"
                            />


                            <MyTextInput
                                label="Repeat Password"
                                name="password2"
                                type="password"
                                placeholder="Repeat Password"
                            />

                            <button type="submit">Create</button>
                            <button type="button" onClick={handleReset}>Reset Form</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}
