# ARTELIO - AI-Powered RPG Experience

ARTELIO is an interactive RPG game built with [RPGJS](https://rpgjs.dev) that features AI-powered NPCs, dynamic dialogue, and generative art/photography experiences.

## Features

### AI-Powered NPCs
- **Artist NPC**: Generates unique artwork based on player interactions using AI image generation
- **Photographer NPC**: Takes portrait photos of the player with dynamic poses and lighting
- **Emotion Bubbles**: NPCs display emotions during interactions (happiness, sadness, thinking, etc.)
- **Dynamic Dialogue**: NPCs respond contextually to player choices and previous interactions

### Technical Implementation
- **External API Integration**: Uses webhooks for AI image generation and dialogue
- **Environment Variables**: Securely manages API endpoints and configuration
- **Inventory System**: Custom items that store and display generated artwork
- **GUI Components**: Custom image viewer for displaying generated art and photographs

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- NPM or Yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]
cd ARTELIO

# Install dependencies
npm install

# Create .env file with required variables
cp .env.example .env
# Edit .env with your API endpoints

# Start development server
npm run dev
```

Navigate to [localhost:3001](http://localhost:3001) to see the game running.

## Production

### Build with NodeJS

```bash
NODE_ENV=production npm run build
```

### Build with Docker

```bash
sudo docker build -t rpg .
sudo docker run -p 3000:3000 -d rpg
```

## Resources

[Documentation](https://docs.rpgjs.dev)
[Community Help](https://community.rpgjs.dev)

## Implementation Details

### NPC Structure

Each AI-powered NPC follows this implementation pattern:

```typescript
@EventData({
    name: 'npc-identifier',
    mode: EventMode.Shared,
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class NPCEvent extends RpgEvent {
    onInit() {
        // Set appearance and components
        this.setGraphic('sprite-name')
        this.setComponentsTop(Components.text('NPC Name'))
    }
    
    async onAction(player: RpgPlayer) {
        // Handle player interaction
        // Show emotions, dialogue, etc.
    }
    
    // Custom methods for specific NPC functionality
}
```

### Emotion Bubbles

We use the `@rpgjs/plugin-emotion-bubbles` plugin to display NPC emotions:

```typescript
// Show an emotion bubble
this.showEmotionBubble(EmotionBubble.Happy)

// Available emotions:
// - Happy
// - Sad
// - Exclamation
// - Question
// - Heart
// - Angry
// - Sweat
// - Music
// - Sleep
// - ThreeDot
// - Clock
```

### Webhook Integration

AI-powered features use webhook calls to external services:

```typescript
const response = await axios.post(config.webhooks.artGeneration, {
    prompt: 'Your prompt here'
})

// Extract the image URL from the response
const imageUrl = response.data.url
```

## Lessons Learned

1. **Context Management**: When using `setInterval` in RPG-JS events, store a reference to `this` using `const self = this` to maintain the correct context.

2. **Player Variables**: Use player variables to persist state between interactions:
   ```typescript
   // Set a variable
   player.setVariable('VARIABLE_NAME', value)
   
   // Get a variable
   const value = player.getVariable('VARIABLE_NAME')
   ```

3. **Asynchronous Operations**: Always use `async/await` for operations like showing text, making API calls, or opening GUI components.

4. **Error Handling**: Implement proper error handling for external API calls to provide fallback options if the call fails.

## Credits for Sample package assets

### Sounds

[Davidvitas](https://www.davidvitas.com/portfolio/2016/5/12/rpg-music-pack)
Attribution 4.0 International (CC BY 4.0)- https://creativecommons.org/licenses/by/4.0/deed.en

### AI Integration

AI image generation and dialogue powered by custom webhooks.

### Graphics

[Pipoya](https://pipoya.itch.io)

### Icons

https://game-icons.net