const checkingUser = {
    email: 'alexDev@gmail.com',
    password: 'dev123456',
}

export const loginUser = function (email, pwd)  {
    return new Promise((resolve) => {
        setTimeout(() => {
            if(checkingUser.password === pwd && email === checkingUser.email){
                resolve({success: true})
            }else {
                resolve({success: false, message: 'неверный логин или пароль'})
            }

            // reject({success: false, message: 'произошла неизвестная ошибка'})
            //  разкоментируй эту строку, a условие закоментируй
        }, 3000)
    })
}
