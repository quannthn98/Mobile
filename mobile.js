let mobile = function(id,name){
    this.name = name;
    this.id = id,
        this.battery = 100,
        this.draft,
        this.inbox = [
            [],//Mess from id 0
            [],//Mess from id 1
            [] //Mess from id 2
        ],
        this.sent = [
            [],//Mess to id 0
            [],//Mess to id 1
            [] //Mess to id 2
        ],
        this.status = false;
    this.checkOn = function(){
        if (this.status == true) {
            return true;
        } else {
            alert('Máy đang tắt. Vui lòng bật máy lên để sử dụng')
            return false;
        }
    }
    this.turnOnOff = function (){
        if (this.checkOn()){
            this.status = false;
            return alert('Turning off');
        } else {
            this.status = true;
            return alert('turning on')
        }
    }
    this.charge = function (){
        return this.battery = 100;
    }
    this.writeMessage = function(draft){
        return this.draft = draft;
    }
    this.receiveInbox = function(message){
        return this.inbox.push(message);
    }
    this.sendMessage = function (message){
        return this.sent.push(message);
    }
    this.checkInbox = function () {
        let inbox = "<table>"
        for (let i = 0; i < this.inbox.length; i++) {
            inbox += `<tr> <td>${this.inbox[i]}</td> </tr>`
        }
        inbox+= "</table>"
        document.getElementById("myMessages").innerHTML = inbox;
    }
}
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