# Character Gallery - Retro 3D

A stylized interactive gallery website showcasing original characters with a pixelated 3D aesthetic inspired by PS2/Xbox era games.

## Features

- **3D Wireframe Background**: Animated matrix-like world with floating wireframe boxes and particles
- **Interactive Character Cubes**: Click any character cube to enlarge and view details
- **Stats Panel**: Retro game UI with typing animations and animated stat bars
- **Smooth Animations**: Hover effects, smooth enlarging, and rotation animations
- **Responsive Design**: Works on desktop and mobile devices

## How to Use

1. Open `index.html` in a modern web browser
2. Click on any character cube to enlarge it
3. View character stats in the side panel
4. Click outside the cube or the close button (×) to return to gallery view

## Customizing Characters

To add your own characters, edit the `characters` array in `script.js`:

```javascript
const characters = [
    {
        id: 'CH-001',
        name: 'Your Character Name',
        image: 'path/to/your/character/image.png', // or use data URI
        stats: {
            'Power': 85,
            'Speed': 70,
            'Intelligence': 95,
            // Add more stats as needed
        }
    },
    // Add more characters...
];
```

### Image Requirements

- Recommended size: 280x320px (or similar aspect ratio)
- Format: PNG with transparent background (recommended)
- The images will be automatically pixelated to match the retro aesthetic

### Stats

- Stat values should be between 0-100
- Stat names can be customized (e.g., 'Power', 'Speed', 'Magic', etc.)
- Each stat will display as an animated progress bar

## File Structure

```
Digii/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # JavaScript for interactions and 3D background
└── README.md       # This file
```

## Technical Details

- **Three.js**: Used for the 3D wireframe background
- **CSS 3D Transforms**: Used for character cube rotations and animations
- **Vanilla JavaScript**: No frameworks required
- **Responsive Grid**: CSS Grid for character layout

## Browser Support

Works best in modern browsers that support:
- CSS 3D Transforms
- ES6 JavaScript
- Three.js WebGL

## Customization Tips

### Changing Colors

Edit the color values in `styles.css`:
- `#0ff` (cyan) - Primary accent color
- `#0aa` (darker cyan) - Secondary color
- `#000` (black) - Background

### Adjusting Animation Speed

- Cube float animation: Edit `animation: float 3s` in `.cube-wrapper`
- Typing speed: Change the `speed` parameter in `typeText()` function
- Stat bar animation: Adjust the delay multiplier in `createStats()`

### Adding More Background Elements

Edit the `initBackground()` function in `script.js` to add more wireframe objects, particles, or effects.

