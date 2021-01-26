import React from 'react'
import axios from 'axios'
import history from '../../history'

import { useForm } from 'react-hook-form'

const Register = props => {

    const { register, handleSubmit, setError, errors } = useForm()

    const onSubmit = async ({ name, email, password, password_confirmation }) => {

        if (password !== password_confirmation) {
            setError('password_confirmation', { message: 'Passwords do not match.' })
        }
        
        try {
            let response = await axios.post('http://localhost:8000/api/register', {  
                name, email, password, password_confirmation
            })
        
            window.sessionStorage.setItem('email', response.data.email)
            window.sessionStorage.setItem('id', response.data.id)
            window.sessionStorage.setItem('api_token', response.data.api_token)

            window.location.href = "/"
        } catch (error) {
            setError("auth", {
                message: error.response.data.status
            })
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Register</div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group row">
                                    <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>

                                    <div className="col-md-6">
                                        <input ref={register({ required: true })} id="name" type="text" className={`form-control ${errors.name && 'is-invalid'}`} name="name" autoComplete="name" autoFocus />
                                        {errors.name && <span className="invalid-feedback" role="alert"><strong>Name is required</strong></span>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Email Address</label>

                                    <div className="col-md-6">
                                        <input ref={register({ required: true })} id="email" type="email" className={`form-control ${errors.email && 'is-invalid'}`} name="email" autoComplete="email" />
                                        {errors.email && <span className="invalid-feedback" role="alert"><strong>Email is required</strong></span>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                    <div className="col-md-6">
                                        <input ref={register({ required: true })} id="password" type="password" className={`form-control ${errors.password && 'is-invalid'}`} name="password" autoComplete="new-password" />
                                        {errors.password && <span className="invalid-feedback" role="alert"><strong>Invalid password</strong></span>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                    <div className="col-md-6">
                                        <input ref={register({ required: true })} id="password-confirm" type="password" className={`form-control ${errors.password_confirmation && 'is-invalid'}`} name="password_confirmation" autoComplete="new-password" />
                                        {errors.password_confirmation && <span className="invalid-feedback" role="alert"><strong>Passwords do not match</strong></span>}
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register