import io from "socket.io-client";

const socket = io("https://railwaytest-production-a531.up.railway.app/");

const initSocket = () => {
  socket.on("connect", () => {
    console.log("Connected to the server from customer.");
  });


};

const sendRescueRequest = (author, location) => {
  socket.emit("rescue-request", {
    message: `Yêu cầu cứu hộ mới từ ${author}`, 
    location: location,
  });
};

const getResponse = () => {
  socket.on("new-rescue-response", {
    message: 'đã nhận'
  });
};

export { initSocket, sendRescueRequest, getResponse };
