// Ask for input
process.stdout.write("What's your name? \n")
process.stdin.setEncoding('utf8')
// Get name input
process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  // Give output
  process.stdout.write('Your name is ' + chunk)
})
