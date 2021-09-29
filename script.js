var cover = ["https://awoiaf.westeros.org/images/thumb/9/93/AGameOfThrones.jpg/200px-AGameOfThrones.jpg",
"https://2.bp.blogspot.com/cNkUoD4Lik808mWlo7E4DvBqvnBxlAVBeZ9TYxoKmdDynrkS-Hd4rkPL7il6pFdSFDXi8ltN17NF7zdAw4ubhql-Tw016znFwu8ieBzn3q8oS57s8xkukzUFCs7F447sBrmeaQlHtA=s1600",
"https://ia600208.us.archive.org/BookReader/BookReaderPreview.php?id=stormofswords00mart&subPrefix=stormofswords00mart&itemPath=/24/items/stormofswords00mart&server=ia600208.us.archive.org&page=leaf1&fail=preview&&scale=8&rotate=0",
"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1443806558l/13501.jpg",
"https://img1.od-cdn.com/ImageType-400/0111-1/38C/B74/E2/%7B38CB74E2-8FF9-4166-A203-367D03A78921%7DImg400.jpg",
"https://images-na.ssl-images-amazon.com/images/I/618RfZlGg5S.jpg",
"https://images-na.ssl-images-amazon.com/images/I/A1nBtEbjqFL.jpg",
"https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_dance_with_dragons_volume_2-web.jpg",
"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440363536l/26152869._SY475_.jpg",
"https://awoiaf.westeros.org/images/4/45/Rouges_novella.jpg",
"https://images-na.ssl-images-amazon.com/images/I/51DMdnEHunL.jpg",
"https://m.media-amazon.com/images/I/51SYvkSevfL.jpg"
];



async function books(){

try {const data = await fetch("https://www.anapioficeandfire.com/api/books?pageSize=50");
const details = await data.json();

details[0].img = cover[0];
details[1].img = cover[1];
details[2].img = cover[2];
details[3].img = cover[3];
details[4].img = cover[4];
details[5].img = cover[5];
details[6].img = cover[6];
details[7].img = cover[7];
details[8].img = cover[8];
details[9].img = cover[9];
details[10].img = cover[10];
details[11].img = cover[11];

console.log(details);

details.forEach((element) => bookDetails(element)); 
//    console.log(details);
}     
catch(errMsg){
console.log(errMsg);
}
};

books();


function bookDetails({name, isbn, numberOfPages, authors, publisher, released, characters, img}){

const info = document.createElement("div");
info.setAttribute("class", "container");


info.innerHTML =` 
<div class="main">
<div class="image-container">
<img class="image" src='${img}' />
</div>
<div class="details">
<h3>${name}</h3>
<p><b>ISBN: </b>${isbn}</p>
<p><b>No. Of Pages: </b>${numberOfPages}</p>
<p><b>Author: </b>${authors}</p>
<p><b>Publisher: </b>${publisher}</p>
<p><b>Released On: </b>${new Date(released).toDateString()}</p>
<p><b>Character Details: </b><br/></p>
<div class="Charac">
<p class="char"><b>Name :</b> Brandor stark  <b>Gender :</b> Male <b>Culture :</b> Northmen</p><br/> 
<p class="char"><b>Name :</b> Hallis Mollen <b>Gender :</b> Male <b>Culture :</b> Northmen</p><br/> 
<p class="char"><b>Name :</b> Galbart Glover <b>Gender :</b> Male <b>Culture :</b> Northmen</p><br/> 
<p class="char"><b>Name :</b> Margaery Tyrell <b>Gender :</b> Female <b>Culture :</b> Westeros</p><br/> 
<p class="char"><b>Name :</b> Quentyn Martell <b>Gender :</b> Male <b>Culture :</b> Dornish</p><br/> 
</div>
<p><b>Rate Me: </b></p>
<div class="rate">
<input type="radio" id="star5" name="rate" value="5" />
<label for="star5" title="text">5 stars</label>
<input type="radio" id="star4" name="rate" value="4" />
<label for="star4" title="text">4 stars</label>
<input type="radio" id="star3" name="rate" value="3" />
<label for="star3" title="text">3 stars</label>
<input type="radio" id="star2" name="rate" value="2" />
<label for="star2" title="text">2 stars</label>
<input type="radio" id="star1" name="rate" value="1" />
<label for="star1" title="text">1 star</label>
</div>
</div>`;   
document.body.append(info);              
}

async function firstChar(id){

try {const data = await fetch(`https://anapioficeandfire.com/api/characters?page=${id}&pageSize=50`);
const details = await data.json();

console.log(details);

details.forEach((value) => character(value));
}     
catch(errMsg){
console.log(errMsg);
}
};
firstChar(2);

function character({name, gender, culture}){

const data = document.querySelector('.first');

data.innerHTML = `
<p><b>Name : </b>${name}</p>
<p><b>Gender : </b>${gender}</p>
<p><b>Culture : </b>${culture}</p>`;

console.log(data);
}
