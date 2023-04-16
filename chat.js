const socket = io();

let user;

Swal.fire({
	title: "Registro",
	input: "text",
	text: "Ingrese nombre de usuario",
	inputValidator: (value) => {
		return !value && "Mandatorio nombre de usuario";
	},
	allowOutsideClick: false,
}).then((resp) => {
	console.log(resp);
	user = resp.value;
	socket.emit("authenticated", user);
});


const chatBox = document.getElementById("chatBox");

const handleKeyUp = (evt) => {
	if (evt.key === "Enter") {
		if (chatBox.value.trim().length > 0) {
			console.log(chatBox.value);
			socket.emit("chatMessage", { user: user, userMessage: chatBox.value });
			chatBox.value = "";
		}
	}
};
chatBox.addEventListener("keyup", handleKeyUp);

socket.on("messageLogs", (arrayServerMessage) => {
	console.log(arrayServerMessage);
	let chatLog = document.querySelector("#messageLogs");
	let messages = "";
	arrayServerMessage.forEach((message) => {
		messages += `<li>User: ${message.user} - says:  ${message.userMessage}</li>`;
	});

	chatLog.innerHTML = messages;
});

socket.on("newUserConnected", (data) => {
	if (!user) return;
	Swal.fire({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3000,
		title: `${data} has joined the chat`,
		icon: "success",
	});
});
