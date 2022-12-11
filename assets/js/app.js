cl=console.log;
var request=document.getElementById("imgcontainer")

var imgarray=[
             "https://source.unsplash.com/random/van",
             "https://source.unsplash.com/random/city",
             "https://source.unsplash.com/random/mobile",
             "https://source.unsplash.com/random/god",
             "https://source.unsplash.com/random/nature",
             "https://source.unsplash.com/random/computer",
             "https://source.unsplash.com/random/tree",
             "https://source.unsplash.com/random/building",
             "https://source.unsplash.com/random/hourse",
             "https://source.unsplash.com/random/maths",
             "https://source.unsplash.com/random/flower",
             "https://source.unsplash.com/random/sun",
             "https://source.unsplash.com/random/moon",
             "https://source.unsplash.com/random/summit",
             "https://source.unsplash.com/random/kashmir",
             "https://source.unsplash.com/random/tecnology",
             "https://source.unsplash.com/random/newspaper",
             "https://source.unsplash.com/random/telephone",
         ]
		 
	var result=" ";	 
imgarray.forEach(function(img,i){
	result+=`
	<div class="col-sm-4 mb-3">
	   <div class="card">
	      <div class="card-header">Image ${i+1}</div>
		    <div class="card-body">
			  <img src="${img}" class="img-fluid">
			</div>
	   </div>
	</div>
	`
})		 
		 
	request.innerHTML=result;	 
		 
		 
		 
		 
		 
		 