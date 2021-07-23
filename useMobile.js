let mobile1 = new mobile(0,'Mobile1');
let mobile2 = new mobile(1,'Mobile2');
let mobile3 = new mobile(2,'Mobile3');
let mobileList = [mobile1,mobile2,mobile3];
let count = 1;

function saveDraft(id){
    let draft = document.getElementById(id+'').value;
    mobileList[id].writeMessage(draft);
}

function receiveInbox(id){
    let message = document.getElementById(id+'').value;
    mobileList[id].receiveInbox(message);
}

function checkInbox(id){
    mobileList[id].checkInbox()
}

manageMobile();

function manageMobile(){
    let hienthi = "<table>";
    for (let i = 0; i < mobileList.length; i++) {
        hienthi+= `<td> <button type="button" onclick="showMobile(${i})">show ${mobileList[i].name}</button></td>`
    }
    hienthi += "</table>";
    document.getElementById("mobileList").innerHTML = hienthi;
}

function showMobile(id){
    let hienthi = `<table border="1"> <th> You are logged in ${mobileList[id].name}</th>    `
    for (let i = 0; i < mobileList.length; i++) {
        hienthi += `<tr> <td onclick ="showMessage(${id},${mobileList[i].id})"> ${mobileList[i].name} </td> </tr>`
    }
    hienthi += `</table>`
    if (count==1){
        document.getElementById("mobile1").innerHTML = hienthi;
        count++
    } else {
        document.getElementById("mobile2").innerHTML = hienthi;
        count=1;
    }

}
function showMessage(id1,id2){
    let hienthi = `<h1> Send mess From ${mobileList[id1].name} to ${mobileList[id2].name}</h1> <p id="content"></p> <input id="messages" type="text"> <button onclick="sendMessage(${id1},${id2})">send</button>`
    let messages = `<table border='1'> <tr><th colspan="2">You are chatting with ${mobileList[id2].name} </th> </tr>`;
    document.getElementById("myMessages").innerHTML = hienthi;
    for (let i = 0; i < mobileList[id1].sent[id2].length; i++) {
        if (i > 5){
            break;
        }
        messages += `<tr> <td style="width: 100px"> ${mobileList[id1].inbox[id2][i]} </td> <td style="width: 100px;text-align: right">${mobileList[id1].sent[id2][i]}</td> </tr>`
    }
    messages +=`</table>`
    document.getElementById("content").innerHTML = messages
}

function sendMessage(id1,id2){
    let message = document.getElementById("messages").value;
    mobileList[id1].sent[id2].push(message);
    mobileList[id1].inbox[id2].push('');
    mobileList[id2].inbox[id1].push(message);
    mobileList[id2].sent[id1].push('');
    showMessage(id1,id2)
}