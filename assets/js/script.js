//გევალებათ ააწყოთ სლაიდერი, როგორიც მიმაგრებულ ბმულზეა//
//მოთხოვნები://
//1. დროის რაღაც პერიოდში თავისით უნდა ირთვებოდეს შემდეგი ფოტო//
//2. ქვემოთ წრეზე დაჭერით უნდა ხსნიდეს შესაბამის ფოტოს//
//3. თუ მაუსს მივიტანთ ფოტოსთან, არ უნდა შეიცვალოს მანამ, სანამ არ მოვაშორებთ მაუსს//
//4. თუ წრეზე დაჭერით ავირჩევ ფოტოს უნდა განახლდეს ტაიმერი და იმ ფოტოდან განაგრძოს მუშაობა//

//მასივში შევინახე ფოტოს მისამართები
const images = [ 
    "./assets/images/0.png",
    "./assets/images/1.png",
    "./assets/images/2.png",
    "./assets/images/3.png",
    "./assets/images/4.png",
    "./assets/images/5.png", 
    "./assets/images/6.png",
    "./assets/images/7.png",
    "./assets/images/8.png",
    "./assets/images/9.png",
    "./assets/images/10.png",
    "./assets/images/11.png",
    "./assets/images/12.png",
    "./assets/images/13.png",    
];

//ცვლადში შევინახე დივი, სადაც უნდა ჩაიყაროს ფოტო
const imagesDiv = document.getElementById("images"); 
//ცვლადში შევინახე დივი, დადაც უნდა ჩაიყაროს ღილაკები
const buttonsDiv = document.getElementById("buttons"); 
//პირველ დივში შევქმენი ფოტო 
const myImage = document.getElementById("my-image"); 
//ფოტოს მივანიჭე მისამართი, ფოტო რომ გამოჩნდეს
myImage.setAttribute('src', images[0]); 

let time1=document.getElementById('time+');
let time2=document.getElementById('time-');
//setIntervalis დრო
let timeSetInterval=1000;

//მასივს გადავყვებით ფორით
for(let i=0; i<images.length; i++){ 
    //ყოველი i-თვის შევქმენი ფოტო
    const image=document.createElement("img"); 
    //შექმნილ ფოტოს ატრიბუტის სახით მივეცი src ატრიბუტი და მისამართი მასივიდან 
    image.setAttribute('src', images[i]); 

    //ყოველი i-თვის შევქმენი ღილაკი
    const button=document.createElement("button"); 
    //ღილაკს მივანიჭეთ i აიდად, მასივის ინდექსი და ღილაკის აიდი ერთნაირი იქნება და მარტივად გამოვიტან ფოტოს
    button.id = i; 
   
    //დივში ჩავაგდე ფოტო
    imagesDiv.appendChild(image); 
    //დივში ჩავაგდე ღილაკი
    buttonsDiv.appendChild(button); 
}

//პირველი ღილაკს გაშვებისას ეგრევე მივანიჭე ფერი. css-ში გავაკეთე კლასი, რომელიც ღილაკში მიანიჭებს შავ ფერს
document.getElementById(0).classList.add("button-color");

//ცვლადში უნდა შევინახო ღილაკის აიდი 
let y=0;
buttonsDiv.addEventListener('click', function(e){
    //ღილაკზე კლიკის დროს თაიმერს ვთიშავთ
    clearInterval(TimeInterval);
    //თუ მოსმენისას tagName დაემთხვევა ღილაკის სახელს    
    if(e.target.tagName ==="BUTTON"){ 
        //ზედა პირველი დივის ფოტოს ატრიბუტად ვანიჭებთ მასივის იმ ელემენტს, რომელსაც მოგვცემს დაკლიკებული ღილაკის აიდი
        myImage.setAttribute('src', images[e.target.id]);        
        // + ით სტრინგი გადავაქციე რიცხვად, ცვალში შევინახეთ დაკლიკებული ღილაკის აიდი
        y=+e.target.id;
        activateButton();
        timer();
    }
});

timer();

function timer (){    
    //ცვალში შევინახე setInterval, შემდგომ რომ გავთიშო
    TimeInterval = setInterval(() => {
        //კლიკის დროს რა მნიშნელობაც გადაეცემა ცვალს +1-ით გაარძელებს  
        y++;
        if(y == images.length){
            y=0;
        }
        //თანმიმდევრობით გამოიტანე შემდეგ ფოტოებს
        myImage.setAttribute('src', images[y]);        
        activateButton();        
    }, timeSetInterval);
}

function activateButton(){
    //აქტიური ფოტოს შესაბამის ღილაკს ეგრევე მივანიჭე ფერი (სიმრავლეში იქნება ერთი ატქიური ღილაკი, ამიტომ მივანიჭე 0)
    const activeButton = document.getElementsByClassName("button-color")[0];

    //თუ აქტიური ღილაკს აღვს ფერი
    if(activeButton){
        //აქტიურ ღილაკს ფერი მოეშალოს
        activeButton.classList.remove("button-color");
    }   
    //ყოველ ახალ ღილას აიდით y შეეცვალოს ფერი (ფოტოც იცლება და შესაბამისად ღილაკის ფერიც)
    document.getElementById(y).classList.add('button-color');
}

//მაუსის მიტანოს დროს ტაიმერი გაჩერდეს
myImage.addEventListener("mouseenter", () =>{
    clearInterval(TimeInterval);
});

//მაუსის გატანოს დროს ტაიმერი ჩაირთოს
myImage.addEventListener("mouseleave", () =>{
    timer();
});

time1.addEventListener("click", () =>{
    clearInterval(TimeInterval);
    timeSetInterval+=300;
    timer();
});

time2.addEventListener("click", () =>{
    clearInterval(TimeInterval);
    timeSetInterval-=300;
    timer();
});
