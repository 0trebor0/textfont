const colors  = {
    fonts:{
        white:"\x1b[37m%s\x1b[0m",
        red:"\x1b[31m%s\x1b[0m",
        green:"\x1b[32m%s\x1b[0m",
        blue:"\x1b[34m%s\x1b[0m",
        yellow:"\x1b[33m%s\x1b[0m"
    },
    background:{
        white:"\x1b[47m%s\x1b[0m",
        red:"\x1b[41m%s\x1b[0m",
        green:"\x1b[42m%s\x1b[0m",
        blue:"\x1b[44m%s\x1b[0m",
        yellow:"\x1b[43m%s\x1b[0m"
    }
}
module.exports = ()=>{
    for(let x in colors.fonts ){
        console[x] = (text)=>{
            console.log( colors.fonts[x], text );
        }
    }
    return colors;
};