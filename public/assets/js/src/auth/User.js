import fetch from "../helpers/fetch.js"

export default class User {
    static async signUp () {
        const response = await fetch('/sign-up', {
            body: {
                firstname: $('#firstname').val(),
                lastname: $('#lastname').val(),
                email: $('#email-address').val(),
                type: 'user',
                password: $('#password').val(),
                passwordAgain: $('#password-again').val()
            }
        })

        if (response.successful) {
            $('#logger-error').hide()  

            return location.href = '/home'
        }

        $('#logger-error').text(response.error)
        $('#logger-error').show()  
    }

    static async signIn () {
        const response = await fetch('/sign-in', {
            body: {
                email: $('#email-address').val(),
                password: $('#password').val()
            }
        })

        if (response.successful) {
            $('#logger-error').hide()  

            return location.href = '/home'
        }

        $('#logger-error').text(response.error)
        $('#logger-error').show()  
    }
}