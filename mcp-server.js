#!/usr/bin/env node
/**
 * MCP Server for Fortune Cookie CLI
 * Works with Claude Desktop
 */

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const FortuneCookie = require('./src/index.js');

const cookie = new FortuneCookie();

const server = new Server(
  {
    name: 'fortune-cookie-mcp',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler('tools/list', async () => {
  return {
    tools: [
      {
        name: 'get_fortune',
        description: 'Get a fortune cookie prediction for your coding session',
        inputSchema: {
          type: 'object',
          properties: {
            personality: {
              type: 'string',
              enum: ['zen', 'hype', 'roast', 'nostradamus', 'shakespeare'],
              description: 'The personality of the fortune',
              default: 'zen'
            }
          }
        }
      }
    ]
  };
});

// Handle tool calls
server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'get_fortune') {
    const personality = request.params.arguments?.personality || 'zen';
    const fortune = cookie.getRandomFortune(personality);
    
    return {
      content: [
        {
          type: 'text',
          text: `🥠 ${fortune}\n\nPersonality: ${personality}`,
        },
      ],
    };
  }
  
  throw new Error(`Unknown tool: ${request.params.name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Fortune Cookie MCP server running on stdio');
}

main().catch(console.error);
