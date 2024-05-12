import React, { useState } from 'react'
import styled from 'styled-components'

const ValidateSignUpForm = () => {

    const SignUpForm = () => {
        const [formData, setFormData] = useState({
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            confirmPassword: null
        })
    
        const [errors, setErrors] = useState({
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            confirmPassword: null
        })
    
        const handleChange = (e) => {
            e.preventDefault()
    
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }
    
        const handleSubmit = (e) => {
            e.preventDefault()
            const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
            const { firstName, lastName, email, password, confirmPassword } =
                formData
            let isValid = true
    
            let newErrors = {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                confirmPassword: null
            }
    
            if (!firstName) {
                newErrors.firstName = 'First name cannot be empty'	
                isValid = false
            }
    
            if (!lastName) {
                newErrors.lastName= 'Last name cannot be empty'
                isValid = false
            }
    
            if (!regex.test(email)) {
                newErrors.email= 'Invalid email address'
                isValid = false
            }
            if(!password || password.length < 8 ){
                newErrors.password= "Password must be greater than 7 characters"
                isValid = false
            }
    
            if(password !== confirmPassword ){
                newErrors.password = "Passwords do not match"
                isValid = false
            }
    
            setErrors(newErrors)
    
            if (isValid) {
                console.log('Form submitted successfully')
            }
        }
    }    
  return (
    <div>
      <Wrapper>
			<form onSubmit={handleSubmit}>
				<input
					data-testid="first-name-id"
					type="text"
					name="firstName"
					onChange={(e) => handleChange(e)}
					placeholder="First Name"
				/>
				{errors.firstName && (
					<p data-testid="first-name-error-id" className="error">
						{errors.firstName}
					</p>
				)}
				<input
					data-testid="last-name-id"
					type="text"
					name="lastName"
					onChange={(e) => handleChange(e)}
					placeholder="Last Name"
				/>
				{errors.lastName && (
					<p data-testid="last-name-error-id" className="error">
						{errors.lastName}
					</p>
				)}

				<input
					data-testid="email-id"
					type="email"
					name="email"
					onChange={(e) => handleChange(e)}
					placeholder="Email Address"
				/>
				{errors.email && (
					<p data-testid="email-error-id" className="error">
						{errors.email}
					</p>
				)}
				<input
					data-testid="password-id"
					type="password"
					name="password"
					onChange={(e) => handleChange(e)}
					placeholder="Password"
				/>
				{errors.password && (
					<p data-testid="password-error-id" className="error">
						{errors.password}
					</p>
				)}
				<input
					data-testid="confirm-password-id"
					type="password"
					name="confirmPassword"
					onChange={(e) => handleChange(e)}
					placeholder="Confirm Password"
				/>
				{errors.confirmPassword && (
					<p data-testid="confirm-password-error-id" className="error">
						{errors.confirmPassword}
					</p>
				)}
				<button type="submit">Sign Up</button>
			</form>
		</Wrapper>

    </div>
  )
}

export default ValidateSignUpForm

const Wrapper = styled.div`
	margin-top: 24px;
	font-family: sans-serif;
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	input {
		padding: 8px 12px;
		font-size: 18px;
		margin-bottom: 6px;
		width: clamp(200px, 40%, 400px);
	}
	button {
		padding: 10px 20px;
		font-size: 18px;
		border: none;
		border-radius: 4px;
		background-color: #333;
		color: #fff;
		cursor: pointer;
		margin-top: 24px;
		&:hover {
			opacity: 0.8;
		}
	}
	.error {
		margin: 0 0 24px 0;
		color: red;
	}
`