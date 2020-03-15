$(document).ready(function () {
    // Grab all required html tags
    currentDay = $('#current-day')
    container = $('#contain')


    // Global Variables
    let textHour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    let rowID = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let staticTime = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
    let hourNow = moment().hour()
    let dateNow = moment().format('dddd, MMMM Do YYYY')


    // Display time on Jumbotron
    currentDay.text(dateNow)


    //FUNCTION: Save Button Execution
    function saveButton(event) {
        event.preventDefault()
        // On button clock grab the value in the textarea
        let textContent = $(this).closest('section').find('textarea').val()

        // On button clock get the time text in the span (within the 1st column of each row)
        let key = $(this).closest('section').find('span').text()

        // assign the key and textContent variables as key and value of local storage respectively
        localStorage.setItem(key, textContent)
    }


    // FUNCTION: Create timeblock row and all inner elements
    // Timeblock main row
    for (let i = 0; i < 9; i++) {
        // Main row div
        let rowDiv = $('<section>')
        rowDiv.attr({
            'class': 'row time-block',
            id: rowID[i]
        })
        container.append(rowDiv)

        // Make time column --> then insert span element
        let hourCol = $('<div>')
        hourCol.addClass('col-1 hour')
        //
        let spanTime = $('<span>')
        spanTime.addClass('span-time')
        spanTime.text(staticTime[i])
        //
        hourCol.append(spanTime)
        rowDiv.append(hourCol)

        // Make the textArea column --> then insert the textarea element
        let textCol = $('<div>')
        textCol.addClass('col-10')
        //
        let textArea = $('<textarea>')
        textArea.attr({
            id: textHour[i],
            'class': 'description',
            name: 'text',
            placeholder: "Enter Event"
        })
        textArea.css('padding', '0.5rem')
        // Conditions for adding colors. (Grey if time is past, Red if time is current, and Green for future time)
        if (parseInt(textArea.attr('id')) === hourNow) {
            textArea.addClass('present')
        } else if (textArea.attr('id') > hourNow) {
            textArea.addClass('future')
        } else if (textArea.attr('id') < hourNow) {
            textArea.addClass('past')
        }
        // Get item from local storage and render in text area. Retain on refresh
        textArea.val(localStorage.getItem(staticTime[i]))
        //
        textCol.append(textArea)
        rowDiv.append(textCol)

        // Make the button column --> insert button --> insert icon into button
        let buttonCol = $('<div>')
        buttonCol.addClass('col-1')
        //
        let button = $('<button>')
        button.addClass('saveBtn')
        button.on("click", saveButton)
        //
        let saveIcon = $('<i>')
        saveIcon.addClass('fas fa-save')
        //
        button.append(saveIcon)
        buttonCol.append(button)
        rowDiv.append(buttonCol)
    }
})