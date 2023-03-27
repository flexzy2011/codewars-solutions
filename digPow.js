//Some numbers have funny properties.
function digPow(n, p){
    let logVers = n.toString().split('').map((x,i)=> Number(x)**(p+i) ).reduce((acc,c)=>acc+c,0)
    let k = logVers / n 
    if(Number.isInteger(k)){
        return k
       }else {
        return -1
      }
    }