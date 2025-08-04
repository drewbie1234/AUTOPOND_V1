"use strict";
/**
 * @file launcher.ts
 * @description Entry point for launching the autopond process in a new terminal window.
 * Depending on the operating system (Windows, macOS, or Linux), it spawns a new terminal window,
 * positions it appropriately, and runs the autopond process via the `runautopond()` function.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const runautopond_1 = require("./runautopond");
// Check if the process was started without the '--child' flag.
if (process.argv.indexOf("--child") === -1) {
    const platform = process.platform;
    let command;
    let args;
    console.log("__filename:", __filename);
    if (platform === "win32") {
        // On Windows, launch a new CMD window running the script.
        // We'll then use a PowerShell command to reposition that window.
        command = "cmd.exe";
        args = ["/c", "start", "cmd.exe", "/k", `node ${__filename} --child`];
        // Spawn the new CMD window.
        (0, child_process_1.spawn)(command, args, { detached: true, stdio: "ignore" });
        // After a brief delay, reposition the new window using PowerShell.
        // The PowerShell command uses user32.dll's SetWindowPos to move/resize the window.
        setTimeout(() => {
            const psCommand = `
        Add-Type -Name Win32API -Namespace Win32 -MemberDefinition @"
          [DllImport("user32.dll")]
          public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int X, int Y, int cx, int cy, uint uFlags);
"@;
        # Get the handle of the first CMD window whose title contains "node"
        $hwnd = (Get-Process -Name cmd | Where-Object { $_.MainWindowTitle -match "node" } | Select-Object -First 1).MainWindowHandle;
        # Reposition the window: x=0, y=0, width=800, height=600, with no special flags.
        [Win32.Win32API]::SetWindowPos($hwnd, 0, 0, 0, 800, 600, 0);
      `;
            (0, child_process_1.spawn)("powershell", ["-Command", psCommand], {
                detached: true,
                stdio: "ignore",
            });
        }, 1000);
    }
    else if (platform === "darwin") {
        // On macOS, use AppleScript to position the Terminal window.
        command = "osascript";
        args = [
            "-e",
            `
      tell application "Terminal"
          activate
          do script "node ${__filename} --child"
          delay 0.5
          set bounds of front window to {0, 22, 960, 1080}
      end tell
    `,
        ];
        (0, child_process_1.spawn)(command, args, { detached: true, stdio: "ignore" });
    }
    else {
        // On Linux (assuming GNOME Terminal)
        command = "gnome-terminal";
        args = ["--geometry=80x24+0+0", "--", "node", __filename, "--child"];
        (0, child_process_1.spawn)(command, args, { detached: true, stdio: "ignore" });
    }
    // Exit the original process.
    process.exit(0);
}
else {
    // In the child process (new terminal window), run the autopond process.
    (0, runautopond_1.runautopond)().catch((error) => console.error(error));
}
