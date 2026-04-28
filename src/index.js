const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const fortunes = require('./fortunes');

class FortuneCookie {
  constructor() {
    this.configPath = path.join(process.cwd(), '.fortune-config.json');
    this.statsPath = path.join(require('os').homedir(), '.fortune-stats.json');
  }

  getRandomFortune(personality) {
    const fortuneList = fortunes[personality] || fortunes.zen;
    return fortuneList[Math.floor(Math.random() * fortuneList.length)];
  }

  renderCookie(text, type = 'normal') {
    const lines = text.split('\n');
    const maxLen = Math.max(...lines.map(l => l.length));
    const width = Math.max(maxLen + 4, 40);
    
    let color = chalk.cyan;
    if (type === 'warning') color = chalk.yellow;
    if (type === 'lucky') color = chalk.magenta;
    
    const box = [
      color('     ⬭⬭⬭⬭⬭⬭⬭⬭⬭⬭'),
      color('   /' + ' '.repeat(width) + '\\'),
      ...lines.map(line => color('  |  ' + line.padEnd(width - 4) + '  |')),
      color('   \\' + ' '.repeat(width) + '/'),
      color('     ⬭⬭⬭⬭⬭⬭⬭⬭⬭⬭'),
      '',
      chalk.gray('           🥠'),
    ];
    
    return box.join('\n');
  }

  serve(options = {}) {
    const personality = options.personality || 'zen';
    const fortune = this.getRandomFortune(personality);
    
    console.log('\n');
    console.log(this.renderCookie(fortune));
    console.log('\n');
    
    const personalityEmoji = { zen: '🧘', hype: '🎤', roast: '🔥', nostradamus: '🔮', shakespeare: '🎭' };
    console.log(chalk.gray(`   ${personalityEmoji[personality] || '🥠'}  ${personality.toUpperCase()} MODE`));
    
    const confidence = Math.floor(Math.random() * 25) + 70;
    console.log(chalk.gray(`   Confidence: ${confidence}%`));
  }

  init() {
    const config = { personality: 'zen', showConfidence: true };
    fs.writeFileSync(this.configPath, JSON.stringify(config, null, 2));
    console.log(chalk.green('\n🥠 Fortune Cookie initialized!'));
    console.log(chalk.cyan('\n   Try: fortune --personality roast\n'));
  }

  stats() {
    console.log('\n🎯 Fortune Statistics');
    console.log(chalk.gray('═'.repeat(40)));
    console.log('Run "fortune" a few times to see stats!\n');
  }

  list() {
    console.log('\n🎭 Available Personalities:\n');
    console.log('  🧘  zen          - Calm, cryptic wisdom');
    console.log('  🎤  hype         - Over-the-top encouragement');
    console.log('  🔥  roast        - Brutal honesty');
    console.log('  🔮  nostradamus  - Mysterious predictions');
    console.log('  🎭  shakespeare  - Dramatic flair\n');
  }
}

module.exports = FortuneCookie;
