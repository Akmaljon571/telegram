let ul = document.querySelector('.right_botom')
let inp = document.querySelector('.right_input')
let icon = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="primary" class="bi bi-check2 b" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>'
let sdiv = document.querySelector('.sdiv')
let prim = document.querySelector('.btn-primary')


let sana = 0
if (sana == 0){
    prim.setAttribute('class', 'none')
}

function play() {
    while (inp.value !== '') {
        if (inp.value !== '') {
        sana++
        if (sana !== 0){
            prim.setAttribute('class','btn btn-primary btn_sana')
        }
        prim.textContent = sana
        let li = document.createElement('div')
        li.setAttribute('class', 'right_right')
        li.textContent = inp.value
    
        let span = document.createElement('small')
        span.setAttribute('class', 'right_small1')
        span.textContent = '10:25'
        let ddiv = document.createElement('div')
        ddiv.setAttribute('class', 'display')
        
        ddiv.append(span)
        ddiv.innerHTML += icon
        li.append(ddiv)
        ul.append(li)
        sdiv.setAttribute('class', 'sdiv none')
        inp.value = '' 
    }
    
}
}

let item = document.querySelector('.left_item')
let h2 = document.querySelector('.left_h5')
let con = document.querySelector('.container1')
let lef = document.querySelector('.left')
let li_item = document.querySelector('.left_item')
let modal = document.querySelector('.madal')
let span = document.querySelector('.orqa_fon')
let spp = document.querySelector('.rigth_p_p')
let label1 = document.querySelector('.label1')

function jami() {
    this.his = function () {
        let li = document.createElement('div')
        li.setAttribute('class', 'right_right')
        li.textContent = 'Hi👋'
        let span = document.createElement('small')
        span.setAttribute('class', 'right_small1')
        span.textContent = '10:25'
        let ddiv = document.createElement('div')
        ddiv.setAttribute('class', 'display')
        
        ddiv.append(span)
        ddiv.innerHTML += icon
        li.append(ddiv)
        ul.append(li)
        sdiv.setAttribute('class', 'sdiv none')

    }
    
    
    this.mad = function () {
        modal.setAttribute('style', 'display:block')
        span.setAttribute('style', 'display:block')
    }
    
    this.hdn = function () {
      modal.setAttribute('style','display:none')
      span.setAttribute('style','display:none')
    }

   this.X = function () {
    con.hidden = true
   }

   this.wid = function () {
    lef.hidden = true;
   }

   this.bgcq = function (birinchi,id1,id2,id3,id4,id5,id6,id7,id8) {
    birinchi.setAttribute('class', 'left_item active')
    id1.setAttribute('class', 'left_item')
    id2.setAttribute('class', 'left_item')
    id3.setAttribute('class', 'left_item')
    id4.setAttribute('class', 'left_item')
    id5.setAttribute('class', 'left_item')
    id6.setAttribute('class', 'left_item')
    id7.setAttribute('class', 'left_item')
    id8.setAttribute('class', 'left_item')
    ul.textContent = ''
    sdiv.setAttribute('class', 'sdiv')
    spp.textContent = birinchi.textContent
   }

   this.label = function () {
       let img = document.createElement('img')
       img.setAttribute('class', 'right_image1')
       
   }


}  

jami()

