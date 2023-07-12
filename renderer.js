const infoText = document.getElementById('info');
console.log('versions', versions)
infoText.innerHTML = `versions are node-${versions.node()} and chrome-${versions.chrome()} and electron- ${versions.electron()}`


const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
  }
  
  func()