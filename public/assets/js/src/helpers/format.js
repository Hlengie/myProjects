export const formatUserTripSearch = (trips) => {
    let formated = '';

    trips.forEach(trip => {
        formated += `
            <ul class="table__body__row table__body__row--trip" data-tripid="${trip.id}">
                <li class="table__body__row__item">${trip.starting_address}</li>
                <li class="table__body__row__item">${trip.dest_address}</li>
                <li class="table__body__row__item">${trip.distance}</li>
                <li class="table__body__row__item">R${Math.floor(trip.fare)}</li>
                <li class="table__body__row__item">${trip.status}</li>
            </ul>
        `    
    });

    return formated;
}