$("#add-coord").on("click", ()=>{
    $("#overlay").css("display","block");
})

$("#chng-password").on("click", ()=>{
    $("#password-overlay").css("display","block");
})
// $(".deleteCord").on("click", ()=>{
//     $("#Cord-overlay").css("display","block");
// })

$("#close-overlay").on("click", ()=>{
    $("#overlay").css("display","none");
})

$("#close-overlay-pssd").on("click", ()=>{
    $("#password-overlay").css("display","none");
})

$("#close-overlay-cord").on("click", ()=>{
    $("#Cord-overlay").css("display","none");
})


function DeleteCordOver(id){
    console.log(id);
    document.getElementById('cordDeleteId').value=id;
    document.getElementById('Cord-overlay').style.display="block";
    // $("#Cord-overlay").css("display","block");
}