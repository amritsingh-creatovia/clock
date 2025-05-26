

const app = document.querySelector('.app') as HTMLElement;
function crSel(element:string){
    return document.querySelector(element);
} 
app.textContent = "Server is running";


// utility function 

interface newEle{
    tag : string;
    tagClass: string;
    tagId?: string;
}

function generateEle(element: newEle):HTMLElement{
    const ele = document.createElement(element.tag);
    ele.classList.add(element.tagClass);
    if(element.tagId){
          ele.setAttribute('id', element.tagId);
    }
    return ele;

}

// clock contianer

const clockBlock = generateEle({tag:"DIV", tagClass: "clock-block"});
const clockContianer = generateEle({tag:"DIV", tagClass: "clock-container"});
const clockHeaderContianer = generateEle({tag:"DIV", tagClass: "clock-header-container"});

function clock(){
    
}


clock();






