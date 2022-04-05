module.exports = interval => {
  if (interval <= 0) {
    throw new Error("'interval' must be a positive integer")
  }

  const queue = []

  const unqueue = () => {
    const callback = queue.shift()
    if (callback) {
      callback()
    }
  }

  setInterval(unqueue, interval)

  return callback => {
    queue.push(callback)
  }
}
