// start cam

$(()=>{
  //show camera
  $('.btn-info').click(()=>{
    //now show csm as modal
    $('#whole').fadeIn(1000)
  });
  
Webcam.set({
  width:900,
  height: 1000,
  image_format:'jpg'
  
  
});
 // get the elem
 Webcam.attach(".video");
      // btn 
btn=document.querySelector(".capture");
     btn.addEventListener('click',function(){

 // test 
 console.log("e de work ")
      Webcam.snap(function(data_uri){
 snap=document.querySelector(".snap");
 swal(
   'captured',
   'your image has been captured, click the picture u snaped to preview  ',
  
 )
 snap.innerHTML='<img src="'+data_uri+'" width="200px" height="200px" style="position:relative; top:-220px" margin-left:20px>';
 
      })
     })
     //lemme write jquery here
     $('.snap').click(function(){
        //now hide the camera 
        // and disppay the image 
        $('#whole').hide();
        
    snap.style.margin=90;
    //  display info 
    $('h6').html("<b>hold down the image to  save</b>");
      
        
     })
    //jquery script ends here 
})