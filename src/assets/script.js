function insert(username, transaction, event, points) {
    var dateObj = new Date()

    var date = dateObj.getDate() + ". "

    switch (dateObj.getMonth()) {
        case 0: date += 'Jan. '
            break
        case 1: date += 'Feb. '
            break
        case 2: date += 'Mar. '
            break
        case 3: date += 'Apr. '
            break
        case 4: date += 'May '
            break
        case 5: date += 'Jun. '
            break
        case 6: date += 'Jul. '
            break
        case 7: date += 'Aug. '
            break
        case 8: date += 'Sep. '
            break
        case 9: date += 'Oct. '
            break
        case 10: date += 'Nov. '
            break
        case 11: date += 'Dec. '
            break
    }

    date += dateObj.getFullYear() + "."

    var time = dateObj.getMinutes() + " : " + dateObj.getSeconds()

    var data = {
        username,
        transaction,
        date,
        time,
        event,
        points
    }

    $.ajax({
        type: 'post',
        url: window.location.href.toString().split(window.location.host)[1].split('?')[0],
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json'
    })
}