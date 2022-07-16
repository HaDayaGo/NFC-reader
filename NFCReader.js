ReadNfcCard();

async function ReadNfcCard(){
    if ('NDEFReader' in window) {
        try {
            alert("NFC reader supported!!!");

            const ndefReader = new NDEFReader();
    
            ndefReader.onreading = (event) => {
                alert("on reading");
                // console.log(event);
            };
    
            ndefReader.readingerror = (event) => {
                alert("reading error occured");
            };
    
            await ndefReader.scan();
    
        } catch (error) {
            alert(error);
        }
    } else {
        alert("NFC reader not supported");
    }
}