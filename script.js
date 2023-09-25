let myRequest = new XMLHttpRequest();


myRequest.open('GET','articles.json')

myRequest.send();

myRequest.onreadystatechange=function () {
    if (myRequest.status === 200 && myRequest.readyState === 4) {
        
        let myJsonObject=myRequest.responseText;
        let mainData=JSON.parse(myJsonObject)

        for(let data in mainData){
            mainData[data].class='All';
        }
        let divData=document.createElement('div');
        divData.id='data';
        for(let data in mainData){
            divData.innerHTML=`${divData.innerHTML} 
            <div>
            <h2>${mainData[data].title}</h2>
            <p>${mainData[data].body}</p>
            <p>${mainData[data].category}</p>
            <p>${mainData[data].author}</p>
            </div>`
        }
        document.body.appendChild(divData);
    }
}
    

