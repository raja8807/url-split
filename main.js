let url = 'https://www.youtube.com'

const splitURL = (url) => {
    let out = []

    let x = url.split('://')
    
    out.push(x[0])

    let y = x[1].split(".")
    
    out = out.concat(y)
    
    return out
}

console.log(splitURL(url));