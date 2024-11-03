export const regexpKit = {
    email: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
}

export const validateByRegexp = (value, regExp) => {
    let isValid = regExp.test(value)

    return isValid
}