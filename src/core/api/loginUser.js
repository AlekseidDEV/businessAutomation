const checkingUser = {
    email: 'alexDev@gmail.com',
    password: 'dev123456',
}

export const loginUser = function (email, pwd, statusCode)  {
    return new Promise((resolve, reject) => {
        if(statusCode === 200){
            setTimeout(() => {
                if(checkingUser.password === pwd && email === checkingUser.email){
                    resolve({success: true})
                }else {
                    resolve({success: false, message: 'неверный логин или пароль'})
                }
            }, 3000)
        }else {
            setTimeout(() => {
                reject({success: false, message: 'произошла неизвестная ошибка'})
            }, 4000)
        }
    })
}
