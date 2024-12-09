# Poll without an iframe

## Installation
- **Install packages:** `npm i`
- **Run in development mode:** `npm run dev`
- **Run Test Cases:** `npm test`
- **Open URL:** `http://localhost:8080/`

## Technologies
### UI Library: React
- **Component-Based Architecture:**
  - Perfect for creating reusable UI components like this poll widget
  - Makes it easy to manage state and props within isolated components
  - Great for building interactive UIs with minimal code
- **Virtual DOM:**
  - Efficiently updates only what needs to change in the poll
  - Provides better performance for interactive elements
- **Large Ecosystem:**
  - Huge community and many ready-to-use libraries
  - Extensive documentation and resources
  - Easy to find solutions and developers

### Bundler: Vite
- **Fast Development Experience:**
  - Lightning-fast hot module replacement (HMR)
  - Instant server start
  - No bundling needed during development
- **Modern Build Tool:**
  - Built for modern JavaScript and TypeScript
  - Optimized production builds
  - Better performance than older bundlers like webpack
  - Native ESM support
- **Simple Configuration:**
  - Zero-config for many projects
  - Easy to set up and maintain
  - Great for small to medium-sized applications like this widget

### Styling: Tailwind CSS
- **Utility-First Approach:**
  - Rapid UI development with pre-built utility classes
  - No need to write custom CSS
  - Consistent styling across components
- **Performance:**
  - Only includes the CSS you use
  - Small production bundle size
  - No runtime overhead
- **Responsive Design:**
  - Built-in responsive design utilities
  - Perfect for making the poll widget work on all screen sizes
  - Easy to maintain responsive layouts
- **Customization:**
  - Highly customizable through configuration
  - Can match any design system or brand guidelines
  - No need for separate CSS files

## Usage
### HTML Implementation
```html
<script>
  // Creates a global CustomPoll object if it doesn't exist
  // Sets up a function to store poll configurations
  // Uses unique identifiers (_cp and _cp1) to manage multiple polls
    function initializeCustomPoll(uniqueId) {
        window.CustomPoll = window.CustomPoll || {};
        var CustomPoll = window.CustomPoll;
        CustomPoll[uniqueId] = CustomPoll[uniqueId] || function(config) {
          (CustomPoll[uniqueId].c = CustomPoll[uniqueId].c || []).push(config);
        };
      }

      // Initialize first poll
      initializeCustomPoll('_cp');
      CustomPoll._cp({
        parentElementId: "root",
        id: "1",
        question: "How do you prefer to engage with online content?",
        options: [
          { id: "1", label: "Voting in polls", voteCount: 0 },
          { id: "2", label: "Reading comments", voteCount: 0 },
          { id: "3", label: "Sharing on social media", voteCount: 0 }
        ],
        totalVotes: 0
      });
</script>
```

### Configuration Properties
- `parentElementId`: Where to render the poll (we need to create element with the Respective Id)
- `id`: Unique identifier for the poll
- `question`: The poll question
- `options`: Array of voting options
- `totalVotes`: Vote counter

### Key Features
- Multiple Polls: Support for multiple polls on the same page using different unique identifiers
- Modular Design: Each poll is independently configured and rendered
- Responsive Layout: Uses Tailwind CSS classes for responsive design
- Clean Integration: Polls are initialized via JavaScript and rendered into specified container elements
- Storage: Result is saved in the localStorage
- Refreshing: On refresh you can vote again

### Main Entry Point
The `main.jsx` file handles:
- Creating elements with IDs to render on the screen
- Validation (handling errors for improper configuration or duplicate polls)
- Poll rendering based on the uniqueId specified by the user (e.g., `_cp`)
