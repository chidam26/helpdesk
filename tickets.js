let ticketsArray = [];

function generateTicketId(){
    let nums = "0123456789";
    let number_length = 4;
    let randomnumber = '';
    for (let i=0; i<number_length; i++) {
        let r = Math.floor(Math.random() * nums.length);
        randomnumber += nums.substring(r,r+1);
    }
    return  (randomnumber);
}

// console.log(generateTicketId());

// function serialNumber() {
//     for (i=1; i<10; i++) {
//     let serial = i;
//     return serial
//     }
// }
// console.log(serialNumber());


function ticketSummary(ticketID, category, description, status) {
    let table = document.getElementById('tablebody');
    table.style.textAlign = 'center';
    table.style.fontWeight = 'bold';
    let row = table.insertRow();
    // let ticketSno = row.insertCell(0);
    let ticketnumber = row.insertCell(0)
    let ticketCategory = row.insertCell(1);
    let ticketDescription = row.insertCell(2);
    let ticketStatus = row.insertCell(3);

    // ticketSno.innerHTML = serialNumber;
    ticketnumber.innerHTML = ticketID;
    ticketCategory.innerHTML = category;
    ticketDescription.innerHTML = description;
    ticketStatus.innerHTML = status;
}


function newticket() {
    // let serialNumber = serialNumber();
    let ticketID = generateTicketId();
    let newComplaint = document.getElementById('complaint').value;
    let newDescription = document.getElementById('complaintdes').value;
    let status = 'Pending';
    

    let complaintDetails = {
        // serialNo: serialNumber,
        ticketNumber: ticketID,
        complaint: newComplaint,
        description: newDescription,
        currStatus: status
    }

    // ticketsArray.push(complaintDetails);
    // ref.push(complaintDetails);
    // ticketSummary(serialNumber, ticketID, newComplaint, newDescription, status);
    if (newDescription != '') {
    ticketSummary(ticketID, newComplaint, newDescription, status);
}
    // localStorage.userComplaint = JSON.stringify(ticketsArray);

    
}
console.log(newticket());