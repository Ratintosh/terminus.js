# 🖥️ terminus.js

A lightweight terminal simulator built with HTML and JavaScript. Perfect for creating interactive command-line experiences in the browser with minimal setup!

## ✨ Features

- **Simple Output** - Use `print()` to display text
- **User Input** - Collect user input with `cin()`
- **Interactive Shell** - Built-in shell mode with command processing
- **Modular Commands** - Easy-to-extend command system with `CommandRegistry`
- **Flexible Display** - Fixed dimensions or full-screen responsive mode

## 🚀 Quick Start

### Basic Setup

```html
<div id="terminal"></div>

<script src="terminus.js"></script>
<script src="program.js"></script>
```

### Minimal Program

```javascript
const terminal = new Terminal("terminal");

async function run() {
    terminal.print("Hello, World!<br>");
}

run();
```

## 📖 Usage

### Output - `terminal.print(text)`

Display text to the terminal:

```javascript
terminal.print("Welcome!<br>");
terminal.print("This is a new line<br>");
```

### Input - `await terminal.cin()`

Wait for user input:

```javascript
terminal.print("What is your name? ");
const name = await terminal.cin();
terminal.print("Hello, " + name + "!<br>");
```

### Interactive Shell - `await terminal.shell(prompt)`

Simulate an interactive shell with a custom prompt:

```javascript
await terminal.shell("user");  // Displays "user$ " and waits for commands
```

## 🎮 Custom Commands

Use `CommandRegistry` to create custom commands:

```javascript
// Create a registry and register commands
const commands = new CommandRegistry();

commands.register("ping", (terminal) => {
    terminal.print("pong<br>");
});

commands.register("greet", (terminal) => {
    terminal.print("Hello there!<br>");
});

// Pass it to the Terminal
const terminal = new Terminal("terminal", commands);
```

Built-in commands:
- `exit` - Exit the shell

## 🎨 Display Modes

### Fixed Size (Classic)
```javascript
const terminal = new Terminal("terminal", commands, false, 24, 80);  // 24 rows, 80 columns
```

### Full Screen (Modern)
```javascript
const terminal = new Terminal("terminal", commands, true);  // Fills viewport
```

## 📋 Complete Example

```javascript
const commands = new CommandRegistry();

commands.register("ping", (terminal) => {
    terminal.print("pong<br>");
});

commands.register("echo", (terminal) => {
    terminal.print("Echo!<br>");
});

const terminal = new Terminal("terminal", commands, true);

async function run() {
    terminal.print("Welcome to Terminus!<br>");
    await terminal.shell("user");
}

run();
```

## 💡 Tips

- Use `<br>` for line breaks instead of `\n`
- Commands are case-sensitive
- Type `exit` to leave the shell
- Add more commands by calling `commands.register()`
