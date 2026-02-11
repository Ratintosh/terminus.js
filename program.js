const commands = new CommandRegistry();
commands.register("ping", (terminal) => {
    terminal.print("pong");
});

const terminal = new Terminal(60, 80, "terminal", commands)

async function run(){
    terminal.print("Welcome to Terminus!<br>");
    await terminal.shell("user");
}

run()