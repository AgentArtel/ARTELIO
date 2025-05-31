// Load environment variables
import dotenv from 'dotenv';
import path from 'path';

// Load the .env file from the project root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

/**
 * Configuration utility for accessing environment variables
 * This centralizes all external integrations and configuration values
 */
export const config = {
  // Webhook URLs
  webhooks: {
    artGeneration: process.env.ART_GENERATION_WEBHOOK_URL || 'https://theagentartel.app.n8n.cloud/webhook/generate-art',
    npcDialogue: process.env.NPC_DIALOGUE_WEBHOOK_URL || 'https://theagentartel.app.n8n.cloud/webhook/chat',
    questGiver: process.env.QUEST_GIVER_WEBHOOK_URL || 'https://theagentartel.app.n8n.cloud/webhook/quest_giver',
    artGenerator: process.env.ART_GENERATOR_WEBHOOK_URL || 'https://theagentartel.app.n8n.cloud/webhook/generate-art',
    cleanCodeMentor: process.env.CLEAN_CODE_MENTOR_WEBHOOK_URL || 'https://theagentartel.app.n8n.cloud/webhook/clean-code-mentor',
  },
  
  // Default assets
  defaultAssets: {
    villagePainting: process.env.DEFAULT_PAINTING_URL || 'https://cdn.midjourney.com/c21f4371-f4ea-465d-87fc-c28e66576b5c/0_2.png',
  },
  
  // AgentArtel API configuration
  agentArtel: {
    apiKey: process.env.AGENT_ARTEL_API_KEY || 'YOUR_API_KEY_HERE', // Set this in .env file
    baseUrl: process.env.AGENT_ARTEL_BASE_URL || 'https://agent-artel-production.up.railway.app',
    agents: {
      dreamInterpreter: process.env.AGENT_ARTEL_DREAM_INTERPRETER || 'sigmund-freud',
      historyMentor: process.env.AGENT_ARTEL_HISTORY_MENTOR || 'history-mentor',
      scienceMentor: process.env.AGENT_ARTEL_SCIENCE_MENTOR || 'science-mentor',
      mentalHealthGuide: process.env.AGENT_ARTEL_MENTAL_HEALTH_GUIDE || 'mental-health-guide',
      cleanCodeMentor: process.env.AGENT_ARTEL_CLEAN_CODE_MENTOR || 'uncle-bob'
    }
  },
  
  // Helper method to get a webhook URL by name
  getWebhookUrl(name: string): string {
    return this.webhooks[name] || '';
  },
  
  // Helper method to get an AgentArtel agent ID
  getAgentId(name: string): string {
    return this.agentArtel.agents[name] || '';
  }
};

export default config;
