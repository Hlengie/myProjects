import fetch from "../helpers/fetch.js"
import popup from "../helpers/popup.js"

export default class Passanger {
    static async board (trip_id) {
        const response = await fetch('/passanger/board', {
            body: {
                trip_id
            }
        })

        if (!response.successful) {
            popup({
                title: 'Could not book ride',
                type: 'error',
                message: response.error
            })

            return 0
        }

        popup({
            title: 'Ride booked',
            type: 'success',
            message: 'Your ride has been successfully booked'
        })

        return 1;
    }
}