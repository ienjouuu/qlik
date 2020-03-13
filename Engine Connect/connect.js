var msg = {
	"handle": -1,
	"method": "OpenDoc",
	"params": {
		"qDocName": "Helpdesk Management.qvf",
		"qUserName": "",
		"qPassword": "",
		"qSerial": "",
		"qNoData": false
	},
	"outKey": -1,
	"id": 1
};

var msg2 = {
	"handle": 1,
	"method": "GetAllInfos",
	"params": {},
	"outKey": -1,
	"id": 2
};

var msg3 = {
	"handle": 1,
	"method": "GetObjects",
	"params": {
		"qOptions": {
			"qTypes": [
				""
			],
			"qIncludeSessionObjects": false,
			"qData": {}
		}
	},
	"outKey": -1,
	"id": 3
};


var ws = new WebSocket("ws://localhost:4848/app/");

ws.onopen = function () {
    console.log("Соединение установлено.");
        ws.send(JSON.stringify(msg));      
};

ws.onmessage = function (event) {
    let MESSAGE = (JSON.parse(event.data));
    console.log(MESSAGE);
    switch (MESSAGE.id) {
        case 1:
            ws.send(JSON.stringify(msg2));
            break;
        case 2:
            ws.send(JSON.stringify(msg3));
            break;        
    }
};
