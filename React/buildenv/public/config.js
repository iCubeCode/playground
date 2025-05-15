fetch('/config.json').then((res) => {
    return res.json()
}).then((result) => {
    console.log(result)
    window.config = result
}).catch((e) => console.log(e))