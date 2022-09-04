import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [userInput, setUserInput] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    const login = async () => {

        const response = await fetch("http://localhost:3002/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: userInput.email,
                password: userInput.password
            })
        })
        const json = await response.json()
        console.log(json);
        if (json.success) {
            navigate("/profile")
        }
    }
    const change = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value })
    }

    return (
        <div class="container mt-5 pt-5 d-flex flex-column flex-lg-row justify-content-evenly">

            <div class="text-center text-lg-start mt-0 pt-0 mt-lg-5 pt-lg-5">
                <h1 class="text-primary fw-bold fs-0">flexbook</h1>
                <p class="w-75 mx-auto fs-4 mx-lg-0">Flexbook helps you connect and share with the people in your life.</p>
            </div>

            <div style={{ maxWidth: "28rem", width: "100%" }}>

                <div class="bg-white shadow rounded p-3 input-group-lg">
                    <input type="email" class="form-control my-3" placeholder="Email address or phone number" name='email' value={userInput.email} onChange={change} />
                    <input type="password" class="form-control my-3" placeholder="Password" name='password' value={userInput.password} onChange={change} />
                    <button class="btn btn-primary w-100 my-3" onClick={login}>Log In</button>
                    <Link to="#" class="text-decoration-none text-center"><p>Forgotten password?</p></Link>

                    <hr />
                    <div class="text-center my-4">
                        <button class="btn btn-success btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#createModal"   >Create New Account</button>
                    </div>
                    <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true"  >
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <div>
                                        <h2 class="modal-title" id="exampleModalLabel">Sign Up</h2>
                                        <span class="text-muted fs-7">It's quick and easy.</span>
                                    </div>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body">
                                    <form>

                                        <div class="row">
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="First name" />
                                            </div>
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="Surname" />
                                            </div>
                                        </div>

                                        <input type="email" class="form-control my-3" placeholder="Mobile number or email address" />
                                        <input type="password" class="form-control my-3" placeholder="New password" />

                                        <div class="row my-3">
                                            <span class="text-muted fs-7">Date of birth <i class="fas fa-question-circle" data-bs-toggle="popover" type="button" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i></span>
                                            <div class="col">
                                                <select class="form-select">
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="col">
                                                <select class="form-select">
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="col">
                                                <select class="form-select">
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="row my-3">
                                            <span class="text-muted fs-7">Gender <i class="fas fa-question-circle" data-bs-toggle="popover" type="button" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i></span>
                                            <div class="col">
                                                <div class="border rounded p-2">
                                                    <label class="form-check-label" for="flexRadioDefault1">Male </label>
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="border rounded p-2">
                                                    <label class="form-check-label" for="flexRadioDefault1">Female </label>
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="border rounded p-2">
                                                    <label class="form-check-label" for="flexRadioDefault1">Custom </label>
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-none" id="genderSelect">
                                            <select class="form-select">
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <div class="my-3">
                                                <span class="text-muted fs-7">Your pronoun is visible to everyone.</span>
                                                <input type="text" class="form-control" placeholder="Gender (optional)" />
                                            </div>
                                        </div>

                                        <div>
                                            <span class="text-muted fs-7">By clicking Sign Up, you agree to our Terms, Data Policy....</span>
                                        </div>

                                        <div class="text-center mt-3">
                                            <button type="button" class="btn btn-success btn-lg" data-bs-dismiss="modal">Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="my-5 pb-5 text-center">
                    <p class="fw-bold"><Link to="#" class="text-decoration-none text-dark">Createa a Page</Link> <span class="fw-normal">for a celebrity, band or business.</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn