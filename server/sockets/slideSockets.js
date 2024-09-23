// server/sockets/slideSockets.js
const presentations = {}; // In-memory storage for presentations (temporary, replace with DB)

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('join-presentation', (presentationId, nickname) => {
      socket.join(presentationId);

      // Add user to the presentation's user list
      if (!presentations[presentationId]) {
        presentations[presentationId] = { users: {}, roles: {} };
      }
      presentations[presentationId].users[socket.id] = { id: socket.id, nickname };

      // Broadcast updated user list to the room
      io.to(presentationId).emit('user-list-updated',
        Object.values(presentations[presentationId].users),
        presentations[presentationId].roles
      );

      console.log(`User ${nickname} joined presentation: ${presentationId}`);
    });

    socket.on('update-role', ({ presentationId, userId, role }) => {
      if (presentations[presentationId]) {
        presentations[presentationId].roles[userId] = role;
        io.to(presentationId).emit('user-list-updated',
          Object.values(presentations[presentationId].users),
          presentations[presentationId].roles
        );
        console.log(`User role updated: ${userId} is now ${role}`);
      }
    });

    socket.on('update-slide', (data) => {
      const { presentationId, slideData } = data;
      socket.to(presentationId).emit('slide-updated', slideData);
    });

    socket.on('disconnect', () => {
      // Remove user from the presentation's user list
      for (const presentationId in presentations) {
        if (presentations[presentationId].users[socket.id]) {
          delete presentations[presentationId].users[socket.id];

          // Broadcast updated user list to the room
          io.to(presentationId).emit('user-list-updated',
            Object.values(presentations[presentationId].users),
            presentations[presentationId].roles
          );

          console.log(`User disconnected: ${socket.id}`);
        }
      }
    });
  });
};
