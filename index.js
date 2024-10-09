
    //Step01 submit function
    let handleSubmit=()=>{

        let inp=document.querySelector('input').value
        console.log(inp);
    
            let data=JSON.parse(localStorage.getItem("user"))
    
            if(!data){
                localStorage.setItem("user",JSON.stringify([inp]))
            }
            else{
                data.push(inp)
                localStorage.setItem("user",JSON.stringify(data))
            }
            document.querySelector('input').value=""
            handleDisplay()
        }
    
        //Step02 Display function
        let handleDisplay=()=>{
            let d= new Date();
    
            let tbody=document.getElementById('tbody')
            let data=JSON.parse(localStorage.getItem("user"))
            tbody.innerHTML="";
    
            if (!data) {
                console.log("data is empty");
            } 
            else {
                data.map((ele,i)=>{
                tbody.innerHTML+=`
                <tr>
                    <th scope="row">${i+1}</th>
                    <td>${ele}</td>
                    <td>0${d.getDate()}-0${d.getMonth()+1}-${d.getFullYear()}<br>${d.getHours()}:0${d.getMinutes()}:${d.getSeconds()}</td>
                    <td class="tdbtn">
                        <button type="button" class="btn btn-primary" onclick="edit(${i})">Edit</button>
                        <button type="button" class="btn btn-danger" onclick="handleDel(${i})">Del</button>
                        <button type="button" class="btn btn-info" onclick="handleUp(${i})">Up</button>
                        <button type="button" class="btn btn-dark" onclick="handleDown(${i})">Down</button>
                    </td>
                  </tr>
                `
            })
            }
        }
    
        //Step03 delete element function
        let handleDel=(i)=>{
            let data=JSON.parse(localStorage.getItem("user"))
            data.splice(i,1)
            localStorage.setItem("user",JSON.stringify(data))
            console.log(i);
            handleDisplay()
        }
    
        // Step 04 Up function
        let handleUp=(i)=>{
            if (i==0) {
            alert("Already on top")
            } 
            else {
            let data=JSON.parse(localStorage.getItem("user"))
            let hold=data[i]
            data[i]=data[i-1]
            data[i-1]=hold
            localStorage.setItem("user",JSON.stringify(data))
            }
        handleDisplay()
        }
    
        // step05 down button
        let handleDown=(i)=>{
            let data=JSON.parse(localStorage.getItem("user"))
            if (i==data.length-1) {
                alert("Already on Bottom")
            } 
            else {
                let down=data[i]
                data[i]=data[i+1]
                data[i+1]=down
                localStorage.setItem("user",JSON.stringify(data))
            }
        handleDisplay()
        }
    
    
    
        //step06 All clear function
        let handleAc=()=>{
            let data=JSON.parse(localStorage.getItem("user"))
            localStorage.clear()
            handleDisplay()
        }
        
        var x;
    
        //step07 Edit text function
        let edit=(i)=>{
        let inp=document.querySelector('input')
        let data=JSON.parse(localStorage.getItem("user"))
        let update=document.getElementById('updatebtn')
            console.log(data[i]);
            inp.value=data[i]
            x=i
            inp.style.width="70%"
            update.style.display="inline-block"
        handleDisplay()
        }
    
        // Step08 Update edit task function
        let update=()=>{
        let inp=document.querySelector('input')
        let data=JSON.parse(localStorage.getItem("user"))
    
        data[x]=inp.value
        localStorage.setItem("user",JSON.stringify(data))
        let update=document.getElementById('updatebtn')
        update.style.display="none"
        inp.style.width="80%"
        handleDisplay()
        }
    
    
        handleDisplay()