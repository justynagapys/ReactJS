import UserForm from "../components/UserForm";

const initialValues = {
    firstName: "",
    lastName: "",
    age: null,
    email: ""
}

const fieldValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
        return `${fieldName} is required`;
    }
    if (fieldValue.trim().length<3) {
        return `${fieldName} needs to be more than 3 characters`;
    }
    return null;
}

const emailValidation = (value) => {
    if (value.trim() === "") {
        return "Email is required";
    }
    return "Please enter a valid email";
}

const ageValidation = (value) => {
    if (!value) {
        return "Age is required";
    }
}

const validate = {
    firstName: (value) => fieldValidation("First name", value),
    lastName: (value) => fieldValidation("Last name", value),
    email: (value) => emailValidation(value),
    age: (value) => ageValidation(value)
}

function Registration() {
    return (
        <div>
            <h1>Registration page</h1>
            <UserForm initialValues={initialValues} validate={validate} />
        </div>
    );
}

export default Registration;