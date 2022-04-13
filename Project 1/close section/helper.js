const fs = require('fs');

const createDocument = async(base=1, list=false, range=1) =>{
    let result = '';

    for(let i=1; i <= range; i++){
        
        result += `${base} x ${i} = ${base*i}\n`
    }

    if(list){
        console.log(`Tabla del ${base}`)
        console.log(result);
    }

    fs.writeFileSync(`tabla-del-${base}.txt`, result);

    return `tabla-del-${base}.txt`;
}

module.exports = createDocument;