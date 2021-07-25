export function throttle(func,wait){
  let hasCall=false,lastFunc,lastTime;
  return function(){
    const context = this
    const args = arguments
    if(!hasCall){
      func.apply(context,arguments)
      lastTime = Date.now()
      hasCall = true
    }else{
      lastFunc&&clearTimeout(lastFunc)
      lastFunc = setTimeout(() => {
        func.apply(context,args)
        lastTime = Date.now()
      }, Math.max(wait -(Date.now() - lastTime),0));
    }
  }
  
}