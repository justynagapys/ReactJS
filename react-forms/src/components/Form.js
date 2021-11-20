function Form({ values, errors, touched, handleSubmit, handleChange, handleBlur }) {
    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group">
                    <label>First name</label>
                    <input name="firstName" type="text" placeholder="Enter first name" onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                    {touched.firstName && errors.firstName}
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input name="lastName" type="text" placeholder="Enter last name" onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
                    {touched.lastName && errors.lastName}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input name="email" type="text" placeholder="Enter email address" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                    {touched.email && errors.email}
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input name="age" type="number" placeholder="Enter age" onChange={handleChange} onBlur={handleBlur} value={values.age} />
                    {touched.age && errors.age}
                </div>
                <div className="form-group">
                    <button type="submit">Sumbit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;