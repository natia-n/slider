// დროის რაღაც პერიოდში თავისით უნდა ირთვებოდეს შემდეგი ფოტო//
// ქვემოთ წრეზე დაჭერით უნდა ხსნიდეს შესაბამის ფოტოს//
// თუ მაუსს მივიტანთ ფოტოსთან, არ უნდა შეიცვალოს მანამ, სანამ არ მოვაშორებთ მაუსს//
// თუ წრეზე დაჭერით ავირჩევ ფოტოს უნდა განახლდეს ტაიმერი და იმ ფოტოდან განაგრძოს მუშაობა//
// დაამატეთ აჩქარების და შენელების ინფუთი. გაითვალისწინეთ მინიმალური და მაქსიმალური სიჩქარის ლიმიტი.
// min: წამში ოთხჯერ, max: 5 წამთი ერთხელ. გამოიყენეთ html range input 
// ყველა ფოტო თავიდანვე იყოს HTML-ში და ცვალეთ ფოტოები რომლებიც უნდა გამოჩნდეს css transition property-ის გამოყენებით.
// ანუ src ატრიბუტი არ შეცვალოთ

// ცვლადში შევინახე დივი, სადაც უნდა ჩაიყაროს ფოტო
const headerDiv = document.getElementById("header"); 
// ცვლადში შევინახე დივი, დადაც უნდა ჩაიყაროს ღილაკები
const buttonsDiv = document.getElementById("buttons"); 
const inputButton = document.getElementById("input-button");
// setIntervalis დროდ ავიღე ველიუს მნიშვნელობა, საწყისად მაქვს 1000 
let timeSetInterval=inputButton.value;
// ცვლადში უნდა შევინახო ღილაკის ინდექსი 
let index=0;

for(let i=0; i<headerDiv.children.length; i++){ 
    // ყოველი i-თვის შევქმენი ღილაკი
    const button=document.createElement("button"); 
    // ღილაკს მივანიჭეთ i ინდექსად, მასივის ინდექსი და ღილაკის ინდექსი ერთნაირი იქნება და მარტივად გამოვიტან ფოტოს
    button.dataset.index = i; 
    // დივში ჩავაგდე ღილაკი
    buttonsDiv.appendChild(button); 
}

// პირველი ღილაკს გაშვებისას ეგრევე მივანიჭე ფერი. css-ში გავაკეთე კლასი, რომელიც ღილაკში მიანიჭებს შავ ფერს
if(buttonsDiv.children!=[]){
    buttonsDiv.children[0].classList.add("button-color");
}

function changeImage() {
    //ცვლადში შევინაცე css კლასი
    const selectedImage = document.querySelector(".add-opacity");
    //თუ ეს კლასი მაქვს, მოვუშალო
    if(selectedImage) {
        selectedImage.classList.remove("add-opacity");
    }
    //ფოტოს, რომელსაც აქვს index მნიშვნელობა, მოვანიჭოთ ეს კლასი
    headerDiv.children[index].classList.add("add-opacity");
    index++;    
    if(index >= headerDiv.children.length) {
        index = 0;
    }
}

changeImage();

buttonsDiv.addEventListener('click', function(e){    
    // თუ მოსმენისას tagName დაემთხვევა ღილაკის სახელს    
    if(e.target.tagName ==="BUTTON"){ 
        // ღილაკზე კლიკის დროს თაიმერს ვთიშავთ
        clearInterval(TimeInterval);        
        // + ით სტრინგი გადავაქციე რიცხვად, ცვალში შევინახეთ დაკლიკებული ღილაკის ინდექსი
        index=+e.target.dataset.index;
        activateButton();
        changeImage();        
        timer();
    }
})

timer();

function timer (){    
    // ცვალში შევინახე setInterval, შემდგომ რომ გავთიშო
    TimeInterval = setInterval(() => {
        // კლიკის დროს რა მნიშნელობაც გადაეცემა ცვალს +1-ით გაარძელებს          
        activateButton(); 
        changeImage();
    }, timeSetInterval);
}

function activateButton(){
    // აქტიური ფოტოს შესაბამის ღილაკს ეგრევე მივანიჭე ფერი (სიმრავლეში იქნება ერთი ატქიური ღილაკი, ამიტომ მივანიჭე 0)
    const activeButton = document.getElementsByClassName("button-color")[0];
    // თუ აქტიური ღილაკს აქვს ფერი
    if(activeButton){
        // აქტიურ ღილაკს ფერი მოეშალოს
        activeButton.classList.remove("button-color");
    }   
    // ყოველ ახალ ღილას აიდით index შეეცვალოს ფერი (ფოტოც იცლება და შესაბამისად ღილაკის ფერიც)
    buttonsDiv.children[index].classList.add('button-color');
}

headerDiv.addEventListener("mouseenter", function(){
    clearInterval(TimeInterval)
});
headerDiv.addEventListener("mouseleave", timer);

inputButton.addEventListener("change", function(){
    timeSetInterval=inputButton.value;
    clearInterval(TimeInterval);
    timer();
})
