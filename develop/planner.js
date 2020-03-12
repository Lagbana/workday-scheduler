// Grab all required html tags
currentDay = $('#current-day')
container = $('#contain')



let idHour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
let staticTime = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
let hourNow = moment().hour()
let dateNow = moment().format('dddd, MMMM Do YYYY')
let timeNow = moment().format('h:mm:ss A')

// Display time on Jumbotron
currentDay.text(dateNow)

// createElements function() ----------- using loop create element tags
    // Using the creator loop, add (ids) to rows and textContent (currentTime) to spans
    // Using the creator loop, add eventlistner('click', saveButton function() ) on buttons

    // call --> textArea Color function
    // call --> textArea Color function

    // jQuery create tag ---->     $('<tag>')
    // jQuery add Class ---->     .addClass()
    // jQuery add hour Text ---->     .text()
    // jQuery append into inner tag ---->     .append()

// FUNCTION: Create timeblock row and all inner elements
// Timeblock main row
// let rowDiv = $('<div>')
// rowDiv.attr({
//     'class': 'row time-block',
//         id : idHour[0]
// })
// container.append(rowDiv)

// // Make time column --> then insert span element
// //1
// let hourCol = $('<div>')
// hourCol.addClass('col-1 hour')
// //2
// let spanTime = $('<span>')
// spanTime.addClass('span-time')
// spanTime.text(staticTime[0])
// //3
// hourCol.append(spanTime) 
// rowDiv.append(hourCol)

// // Make the textArea column --> then insert the textarea element
// //1
// let textCol = $('<div>')
// textCol.addClass('col-10')
// //2
// let textArea = $('<textarea>')
// textArea.attr({
//       'class': 'description',
//          name: 'text',
//   placeholder: "Enter Event"
// })
// //3
// textCol.append(textArea) 
// rowDiv.append(textCol)

// // Make the button column --> insert button --> insert icon into button
// //1
// let buttonCol = $('<div>')
// buttonCol.addClass('col-1')
// //2
// let button = $('<button>')
// button.addClass('saveBtn')
// // button.on( "click", saveButton) ------------------------------------------------------------------------> add eventLister
// //3
// let saveIcon = $('<i>')
// saveIcon.addClass('fas fa-save')
// //4
// button.append(saveIcon) 
// buttonCol.append(button) 
// rowDiv.append(buttonCol) 

















// textArea Color function()
    // Grab elements by ID -----------------> $('id')


// saveButton function()
    // call in eventlistner function (createElemnts function)
    // saves local storage
    // gets from local storage
    // pastes back to input field

// clear input field function
    // on backspace or delete of input, clear local storage 