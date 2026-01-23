
function getData(cb){
    setTimeout(() => {
        let succes = true;
if(succes){
    cb(null,"data recived");
}
else{
    cb(null,"error ocuuured");
}
    }, 2000);
}

getData((error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
});

function dukaamSeDudhLaao(cb){
    setTimeout(() => {
        let leaaya = true;
        if (leaaya) {
            cb(null,"badhiya beta shbahsh");
        }
        else{
            cb(null,"kya yaar pandeyji");
        }
    }, 4000);


}
dukaamSeDudhLaao((error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
})


function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;

            if (success) {
                resolve("Data received");
            } else {
                reject("Error occurred");
            }
        }, 2000);
    });
}
getData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    function dukaamSeDudhLaao(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                let dudh = true;
                if(dudh){
                    console.log("data recived");
                }
                else{
                    console.log("nahi");
                }
            }, 2000);
        })
    }
    dukaamSeDudhLaao().then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log("nahi")
    })

