let chooseBtn = document.getElementById("choose"),
    receiveBtn = document.getElementById("receive"),
    contactform = document.getElementsByClassName ("contactform_name") [0],
    text = document.getElementsByTagName ("h2") [0],
    textway = document.getElementsByTagName ("h1") [0],
    modal = document.querySelector(".modal"),
    col = document.querySelectorAll(".main_tel_title") [0],
    closeBtn = document.querySelector(".close"),
    message = document.getElementsByName ("message") [0];



        // First way (No)
 function hover() {
    text.textContent = 'Hammasi Aktiv',
    textway.textContent = 'Biz ongingiz va tanangizni qanday qilib dam olishini bilamiz'
}

        // Second way (No)
text, textway.onmouseenter = hover


        // third way
text.addEventListener('mouseenter',hover)
text.addEventListener('mouseleave',function() {
    textway.textContent = 'Biz: SIZga, zamonaviy mustahkam AKFA va MDF eshik - romlarini tavsiya qilamiz !'
    text.textContent = 'Tashrif buyuring'
})

receiveBtn.addEventListener ('click',function() {
    modal.style.display = 'block'
})

closeBtn.addEventListener ('click',function() {
    modal.style.display = 'none'
})

contactform.addEventListener ('input',function() {
    message.value = `Sizning ismingiz ${contactform.value} chiroyli ism:`
})

