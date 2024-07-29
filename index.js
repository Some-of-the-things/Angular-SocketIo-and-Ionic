import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    console.log("received: %s", data);
  });
});

const port = 9090;

httpServer.listen(9090);

console.log(`Server listening on port ${port}`);

io.send("connection");
