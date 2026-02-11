const terminal = new Terminal(60, 80, "terminal")

async function run(){
    terminal.print("Welcome to Terminus!<br>");
    await terminal.shell("user");
}

run()