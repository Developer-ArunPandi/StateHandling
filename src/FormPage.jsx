import { useState } from "react"
import DisplayPage from "./DisplayPage"

const FormPage = () => {
    const [form, setForm] = useState({ F_Name: "", L_Name: "", Email: "", Password: "" })
    return (
        <>
            <form>
                <div class="row g-3">
                    <div class="col">
                        <label for="inputFirstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" id="inputFirstName"
                            value={form.F_Name} onChange={(e) => { setForm({ ...form, F_Name: e.target.value }) }} />
                    </div>
                    <div class="col">
                        <label for="inputLastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id="inputLastName"
                            value={form.L_Name} onChange={(e) => { setForm({ ...form, L_Name: e.target.value }) }} />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"
                        value={form.Email} onChange={(e) => { setForm({ ...form, Email: e.target.value }) }} />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"
                        value={form.Password} onChange={(e) => { setForm({ ...form, Password: e.target.value }) }} />
                </div>
            </form>
            <br />
            <h1 style={{ margin: "10px" }}>Display</h1>
            <DisplayPage form={form} />
        </>
    )
}

export default FormPage;
