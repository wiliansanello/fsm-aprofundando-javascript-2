function tempo(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(ms), ms)
  })
}

async function ola() {
  const ms = await tempo(2000)
  console.log('terminou', ms)
}

console.log(ola())

