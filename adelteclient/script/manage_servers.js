function stop_instances(){
    socket.connect()
    console.log("stop_instances clicked")
    socket.emit('stop_aws')
}
function start_instances(){
    socket.connect()
    console.log("start_instances clicked")
    socket.emit('run_aws')
}
