const techList = (tec, nome) => {
    tec.sort()
    let tecnologia = [];
    if(tec == '') {
        return 'Vazio!'
    }
    for( let tecno of tec) {
        tecnologia.push({ tech: tecno, name: nome})
        
    };
    return tecnologia;

}


module.exports = techList;