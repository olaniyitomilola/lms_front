async function get(url){

    try {
        let response = await fetch(url);
        // if(response.ok && response.headers.get('cont'))
        response = await response.json();
        return response

    } catch (error) {
        console.log(error);
    }
}

async function post(url,form){
    try {
        let response = await fetch(url,{
        method: 'post',
        headers: {'Content-Type':'application/json '},
        body: JSON.stringify(form)
        })
        if(response.headers.get('content-type').includes('json')){
              response = await response.json();
            return response;
        }else{
            response = await response.text();
            console.log(response)
        }
      

    } catch (error) {
        console.log(error)
    }
  
}

module.exports ={get,post}