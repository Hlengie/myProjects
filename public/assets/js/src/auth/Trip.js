import fetch from "../helpers/fetch.js";
import popup from "../helpers/popup.js"
import Passanger from "./Passanger.js";
import { formatUserTripSearch } from "../helpers/format.js";

export default class Trip {
    static async add (starting_coords, dest_coords) {
        const response = await fetch('/trip/add', {
            body: {
                starting_address: $('#starting-location').val(),
                dest_address: $('#destination-location').val(),
                starting_coords,
                dest_coords
            }
        })

        if (!response.successful) {
            return popup({
                title: 'Could not add trip',
                type: 'error',
                message: response.error
            })
        }

        starting_coords = '';
        dest_coords = '';

        $('#starting-location').val('');
        $('#destination-location').val('');

        return popup({
            title: 'Trip added',
            type: 'success',
            message: 'Trip added successfully'
        })
    }

    static async getLatest () {
        const response = await fetch('/trip/get/latest');

        if (response.successful) {
            $('#latest-trip').html(`
                <ul class="table__body__row">
                    <li class="table__body__row__item">${response.trip.starting_address}</li>
                    <li class="table__body__row__item">${response.trip.dest_address}</li>
                    <li class="table__body__row__item">${response.trip.distance}</li>
                    <li class="table__body__row__item">R${Math.floor(response.trip.fare)}</li>
                    <li class="table__body__row__item">${response.trip.status}</li>
                </ul>
            `)
        };
    }

    static async searchByAddresses () {
        const response = await fetch('/trip/search/addresses', {
            body: {
                starting_address: $('#search-starting-location').val(),
                dest_address: $('#search-dest-location').val()
            }
        });

        if (response.successful) {
            $('#trips').html(formatUserTripSearch(response.trips))

            if (!response.trips || response.trips && response.trips.length > 0)
                $('#no-content').hide();
            else $('#no-content').show();

            $('.table__body__row--trip').on('click', async e => {
                const tripid = e.currentTarget.dataset.tripid;

                if (await Passanger.board(tripid))
                    e.currentTarget.remove()
            })
        };
    }
}