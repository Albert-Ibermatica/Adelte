function saveFileName(selectedFile){
    var files = selectedFile.files;
    var filename = files[0].name
    setCookie('SelectedFileName',filename,2147483647)
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
const getBase64StringFromDataURL = (dataURL) =>
    dataURL.replace('data:', '').replace(/^.+,/, '');

function processSelectedImg(img){
    console.log("he llegado a APDPSOKJKLJADSLKJA")
    const socket = io('http://127.0.0.1:8080');
    socket.connect();
    // Get the remote image as a Blob with the fetch API
    fetch(img.src)
        .then((res) => res.blob())
        .then((blob) => {
            // Read the Blob as DataURL using the FileReader API
            const reader = new FileReader();
            reader.onloadend = () => {
                //console.log(reader.result);
                // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...
                // Convert to Base64 string
                
                
                const base64 = getBase64StringFromDataURL(reader.result);
                console.log('metodo process selected img')
                console.log(base64);
                socket.emit('get_real_img',base64)
                $('#imgdisplay').hide()
                $('#spinner-div').show();//cargamos el spinner
                
                socket.on("segmented_real_img",function(img){
                    console.log("respuesta de segmented real img")    
                    console.log(img)
                     var enc = new TextDecoder("utf-8");
                    var base64img = enc.decode(img)
                      
                    try{

                        console.log('------------- response text -----------------')
                        console.log(img)
                        $('#spinner-div').hide();//quitamos el spipnnero porque ha finalizado la ejecucion
                        $('#imgdisplay').show()
                        document.getElementById('imgdisplay').src='data:image/jpeg;base64,'+base64img;

                    }catch (error){
                        console.error(error.message)
                        
                    }
                    
                })

                
            };
            reader.readAsDataURL(blob);
        });
}

function MyPopUpWin(url, width, height) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    //Open the window.
    window.open(url, "Window2",
        "status=no,height=" + height + ",width=" + width + ",resizable=yes,left="
        + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY="
        + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
}
