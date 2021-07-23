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
