 let myObj ={
     lock:function(target){
        target.classList.add('lock');
     },
     unlock:function(target){
         target.classList.remove('lock');
     }
 }
 
 // NAV OBJECT
 let navObj = {
    
    setNav:function(navList,wrap,navContainer){
        for(let idx=0;idx<navList.length;idx++){
            navList[idx].addEventListener('click',function(){
                navObj.unLockWrap(wrap);
                navObj.closeNav(navContainer);
            })
        }
    }
}

// HEADER OBJECT
let headerObj = {            
    lockHeader:function(target){
        target.classList.add('lock');
    },
    unLockHeader:function(target){
        target.classList.remove('lock');
    },
}

