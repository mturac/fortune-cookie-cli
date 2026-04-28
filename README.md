# 🥠 Fortune Cookie CLI

> "Your code has a destiny. Let the terminal reveal it."

A CLI tool that predicts your coding future every time you save. Because every developer needs a little existential dread with their syntax highlighting.

![Demo](assets/demo.gif)

## 🚀 One-Line Install

```bash
npm install -g fortune-cookie-cli
```

**Or from your favorite marketplace:**
- `clawhub install fortune-cookie-cli`
- `claude plugin install fortune-cookie-cli`
- `codex plugin install fortune-cookie-cli`

## 🎮 Usage (Zero Config)

```bash
fortune              # Get a random fortune
fortune --personality roast    # Get roasted
fortune --personality hype     # Get hyped
```

## ✨ What is this?

Fortune Cookie CLI adds mystical predictions to your coding workflow. Every time you save a file, run a command, or finish a task, it serves you a fortune cookie message with coding wisdom, warnings, and occasionally roasting.

## 🎯 Features

- 🥠 Random fortune cookies on every save
- 🔮 225+ fortunes across 5 personalities
- 🎭 Zen, Hype, Roast, Nostradamus, Shakespeare modes
- 📊 Fortune accuracy tracking
- 🎨 Beautiful terminal animations
- 🔔 Zero configuration required

## 🎮 Usage

### Basic
```bash
# Add to your project
fortune init

# Get a random fortune
fortune

# Get fortune based on your recent git activity
fortune --context
```

### Auto-mode (Recommended)
```bash
# Watches your files and serves fortunes on save
fortune watch

# Specific personality
fortune watch --personality roaster
```

### OpenClaw Integration
```bash
# Install as OpenClaw skill
openclaw skills install fortune-cookie

# Every command gets a fortune!
openclaw fortune
```

## 🎭 Personalities

### 1. Zen Master 🧘
Calm, cryptic wisdom
- "The bug you seek is within yourself."
- "Empty your mind. The solution will come."
- "This refactor will bring you peace."

### 2. Hype Man 🎤
Over-the-top encouragement
- "THIS COMMIT IS ABOUT TO BE LEGENDARY!"
- "YOU'RE ABSOLUTELY CRUSHING IT!"
- "NEXT PR = INSTANT MERGE!"

### 3. Roaster 🔥
Brutal honesty
- "This variable name screams 'I gave up'"
- "Your code has more issues than a magazine stand"
- "Is this function a novel? Because it's 500 lines long"

### 4. Nostradamus 🔮
Mysterious predictions
- "In three days, a bug will emerge from line 42"
- "Your next PR will spark a 47-comment debate"
- "A junior dev will break this within the week"

### 5. Shakespeare 🎭
Dramatic flair
- "To deploy or not to deploy, that is the question"
- "Alas, poor function, I knew thee well"
- "Something wicked this way comes... it's your build"

## 🎯 Examples

```bash
$ fortune
🥠 "You will refactor this tomorrow."
   - Confidence: 97%

$ fortune --roast
🔥 "Function name `doStuff`? Really? That's the best you got?"
   - Burn level: Medium-High

$ fortune --hype
🎤 "BRO! THIS CODE IS ABOUT TO CHANGE THE GAME!"
   - Energy: MAXIMUM
```

## 📈 Fortune Accuracy

Track how often fortunes come true:
```bash
fortune stats

🎯 Accuracy: 73%
📊 Predictions: 42
✅ Came true: 31
❌ Wrong: 11
🔥 Roasts landed: 89%
```

## 🔧 Configuration

```json
// .fortune-config.json
{
  "personality": "roaster",
  "frequency": "on-save",
  "show-confidence": true,
  "share-to-slack": false,
  "custom-fortunes": [
    "You will find the bug. Eventually.",
    "Coffee first, code later."
  ]
}
```

## 🎨 Custom Themes

```bash
# ASCII art styles
fortune --style minimal    # Simple text
fortune --style cookie     # 🥠 ASCII cookie
fortune --style neon       # Cyberpunk glow
fortune --style retro      # Matrix-style
```

## 🚀 Going Viral

Share your fortunes:
```bash
# Auto-tweet your best fortunes
fortune share --twitter

# Post to Slack channel
fortune share --slack #coding-fortunes

# Generate screenshot-ready image
fortune share --image
```

## 🎪 Easter Eggs

- Type `fortune --clippy` for special Clippy mode
- Save exactly at 11:11 for "lucky" fortunes
- Friday deployments trigger special warnings
- First commit of the day gets extra hype

## 📱 Roadmap

- [ ] VS Code extension
- [ ] GitHub Action (comment fortunes on PRs)
- [ ] Fortune leaderboard
- [ ] AI-generated fortunes based on code analysis
- [ ] Fortune cookie physical merch

## 🙏 Credits

Inspired by:
- Clippy (Microsoft Office Assistant)
- Unix `fortune` command
- Every developer who needs emotional support

## 📄 License

MIT - Because even fortune cookies need to be open source

---

<p align="center">
  <i>"The code is dark and full of errors."</i><br>
  🥠
</p>

---

<div align="center">
  <img src="https://raw.githubusercontent.com/mturac/fortune-cookie-cli/main/assets/turac-logo.png" alt="TURAC" width="200">
  <br>
  <sub>Built with 💜 by <strong>TURAC</strong></sub>
</div>
