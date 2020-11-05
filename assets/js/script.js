//გევალებათ ააწყოთ სლაიდერი, როგორიც მიმაგრებულ ბმულზეა//
//მოთხოვნები://
//1. დროის რაღაც პერიოდში თავისით უნდა ირთვებოდეს შემდეგი ფოტო//
//2. ქვემოთ წრეზე დაჭერით უნდა ხსნიდეს შესაბამის ფოტოს//
//3. თუ მაუსს მივიტანთ ფოტოსთან, არ უნდა შეიცვალოს მანამ, სანამ არ მოვაშორებთ მაუსს//
//4. თუ წრეზე დაჭერით ავირჩევ ფოტოს უნდა განახლდეს ტაიმერი და იმ ფოტოდან განაგრძოს მუშაობა//

const images = [ //მასივში შევინახე ფოტოს მისამართები
    "./assets/images/0.png",
    "./assets/images/1.png",
    "./assets/images/2.png",
    "./assets/images/3.png",
    "./assets/images/4.png",
    "./assets/images/5.png", 
];

const imagesDiv = document.getElementById("images"); //ცვლადში შევინახე დივი, სადაც უნდა ჩაიყაროს ფოტო
const buttonsDiv = document.getElementById("buttons"); //ცვლადში შევინახე დივი, დადაც უნდა ჩაიყაროს ღილაკები
const myImage = document.getElementById("my-image"); //პირველ დივში შევქმენი ფოტო 
myImage.setAttribute('src', images[0]); //ფოტოს მივანიჭე მისამართი, ფოტო რომ გამოჩნდეს

for(let i=0; i<images.length; i++){ //მასივს გადავყვებით ფორით
    const image=document.createElement("img"); //ყოველი i-თვის შევქმენი ფოტო
    image.setAttribute('src', images[i]); //შექმნილ ფოტოს ატრიბუტის სახით მივეცი src ატრიბუტი და მისამართი მასივიდან 

    const button=document.createElement("button"); //ყოველი i-თვის შევქმენი ღილაკი
    button.id = i; //ღილაკს მივანიჭეთ i აიდად, მასივის ინდექსი და ღილაკის აიდი ერთნაირი იქნება და მარტივად გამოვიტან ფოტოს

    imagesDiv.appendChild(image); //დივში ჩავაგდე ფოტო
    buttonsDiv.appendChild(button); //დივში ჩავაგდე ღილაკი
}

let y=0;
buttonsDiv.addEventListener('click', function(e){
    clearInterval(TimeInterval);
    if(e.target.tagName ==="BUTTON"){ //თუ დაეკლიკა ღილაკს, ვღებულობთ მის აიდს
        myImage.setAttribute('src', images[e.target.id]);
        //პირველი დივის ფოტოს ატრიბუტად ვანიჭებთ მასივის იმ ელემენტს, რომელსაც მოგვცემს დაკლიკებული ღილაკის აიდი
        y=e.target.id;
        console.log(y);
        console.log('y3');
        tamer();
    }
});

tamer();

function tamer (){    
    TimeInterval = setInterval(() => {
        y=y+1;   
        if(y < images.length){
            myImage.setAttribute('src', images[y]);
            console.log(y);
            console.log('y1');
        }else{
            y=0;
            myImage.setAttribute('src', images[y]);
            console.log(y);
            console.log('y2');
        }
    }, 2000);
}
