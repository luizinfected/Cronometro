let s = 0, m = 0, h = 0 
display.innerHTML = clockPretty(h,m,s)
function clock(){
    if( s < 60){
        s++
    }
    else if( s === 60){
        s = 0
        m++
        if(m === 60){
        m = 0 
        h++
            if(h === 24){
                h = 0
            }
        }
    }
}

function pretty(value){
    if(value < 10){
        return "0" + value
    }
    return value
}

function clockPretty(h,m,s){
    return [pretty(h), pretty(m), pretty(s)].join(':')
}

function start(){
    clock()
    let display = document.getElementById("display")
    display.innerHTML = clockPretty(h,m,s)
}


function timer(){
    interval =  setInterval(() => {start()},1000)
}

function stop() {
    setTimeout(() => {clearInterval(interval)
    }, 0)
}
function reload(){
    clockPretty(h=0,m=0,s=-1)
}