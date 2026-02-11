const terminal = new Terminal(60, 80, "terminal")

async function run(){
    terminal.print("Hello, world!\n")
    terminal.print("Enter your name: ")
    const name = await terminal.cin()
    terminal.print("You just submitted: " + name + "\n")
    console.log("End")
}

run()