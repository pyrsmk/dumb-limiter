module.exports = interval => {
  if (interval <= 0) {
    throw new Error("'interval' must be a positive integer")
  }

  const queue = []

  const unqueue = () => {
    const resolve = queue.shift()
    if (resolve) {
      resolve()
    }
  }

  setInterval(unqueue, interval)

  return () => new Promise(resolve => queue.push(resolve))
}
