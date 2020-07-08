window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  const input = document.getElementById('m')
  const messages = document.getElementById('messages')

  form.addEventListener('submit', e => {
    e.preventDefault()
    socket.emit('chat message', input.value)
    input.value = ''
    return false
  }) 
  socket.on('chat message', function(msg){
    const li = document.createElement('LI')
    li.innerHTML = msg
    messages.append(li);
  });
})