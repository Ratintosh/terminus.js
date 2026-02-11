const commands = new CommandRegistry();
commands.register("ping", (terminal) => {
    terminal.print("pong");
});

const terminal = new Terminal("terminal", commands, true, 60, 80)

async function run(){
    terminal.print("Welcome to Terminus!<br>");
    await terminal.shell("user");
}

run()