export const checkValidateData = (fullName, email, password) => {
    const fullNameValid = /^[a-zA-Z]+$/.test(fullName);
    const emailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    
    if(!fullNameValid) return "Full Name is not valid";
    if(!emailValid) return "Email Id is not valid";
    if(!passwordValid) return "Password is not valid";

    return null;
};