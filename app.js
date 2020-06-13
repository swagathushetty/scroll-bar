// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date=document.getElementById('date')
date.innerHTML=new Date().getFullYear()

// ********** close links ************
const navToggle=document.querySelector('.nav-toggle')
const linksContainer=document.querySelector('.links-container')
const links = document.querySelector('.links')


//when we click the navbar in mobile open the menu
navToggle.addEventListener('click',()=>{
    // linksContainer.classList.toggle('show-links')
    const containerHeight=linksContainer.getBoundingClientRect().height
    console.log(containerHeight)
    const linksHeight=links.getBoundingClientRect().height
    console.log(linksHeight)

    //containerHeight is default 0 intially and linkHeight is the size depending upon the elemtns inside it
    if(containerHeight===0){
        linksContainer.style.height=`${linksHeight}px`
        console.log(linksContainer.style.height)
    }else {
        linksContainer.style.height=0;
    }
    // console.log(containerHeight)
})


const navbar=document.getElementById('nav')
const topLink=document.querySelector('.top-link')
// ********** fixed navbar ************

//when to make the nav-bar fixed
window.addEventListener("scroll",()=>{
    console.log(window.pageYOffset)
    const scrollHeight=window.pageYOffset;
    const navHeight=navbar.getBoundingClientRect().height
    if(scrollHeight>navHeight){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }


    //whether to show the go-to-top button or nor
    if(scrollHeight>500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }
})

// ********** smooth scroll ************
const scrollLinks=document.querySelectorAll('.scroll-link')

scrollLinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault() //prevent the default aka ability to scroll to tabs
        //navigate to specific spot
        const id =e.currentTarget.getAttribute('href').slice(1) //slice the first word i.e # eg-#about becomes about
        const element=document.getElementById(id)

        //calculate the height
        const navHeight=navbar.getBoundingClientRect().height
        const containerHeight=linksContainer.getBoundingClientRect().height
        const fixedNav=navbar.classList.contains('fixed-nav')


        let position=element.offsetTop-navHeight

        if(!fixedNav){
            position=position-navHeight
        }

        if(navHeight>82){
            position=position+containerHeight
        }


        // console.log(position)
        window.scrollTo({
            left:0,
            top:position
        })
        linksContainer.style.height=0
    })
})