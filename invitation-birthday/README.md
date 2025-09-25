# Hogwarts Birthday Invitation Website

A magical Harry Potter-themed birthday invitation website with interactive games and multiple pages.

## 📁 File Structure

```
invitation-birthday/
├── index.html              # Welcome/Entrance page
├── house-selection.html    # Sorting ceremony page
├── quiz-game.html         # Magical knowledge quiz
├── duel-game.html         # Magical duel arena
├── results-bridge.html    # Score display and countdown
├── invitation.html        # Birthday invitation page
├── css/
│   └── style.css          # Shared stylesheet
├── js/
│   ├── script.js          # Shared JavaScript functions
│   ├── index.js           # Entrance page logic
│   ├── house-selection.js # House selection logic
│   ├── quiz-game.js       # Quiz game logic
│   ├── duel-game.js       # Duel game logic
│   ├── results-bridge.js  # Results bridge logic
│   └── invitation.js       # Invitation page logic
├── asset/
│   └── card-invitation.mp4 # Birthday invitation video
└── README.md              # This file
```

## 🎯 Page Flow

1. **`index.html`** - Welcome page with magical letter
   - Hogwarts logo and floating letter animation
   - "Enter the Magic" button
   - Redirects to house selection

2. **`house-selection.html`** - Sorting ceremony page
   - Name input field with validation
   - House selection (Gryffindor, Hufflepuff, Ravenclaw, Slytherin)
   - "Proceed to Challenge" button
   - Stores user data in localStorage

3. **`quiz-game.html`** - Magical knowledge test
   - 5 Harry Potter trivia questions
   - Interactive quiz with animations
   - Score tracking and feedback
   - Redirects to duel game upon completion

4. **`duel-game.html`** - Magical duel arena
   - Turn-based combat against magical creatures
   - Attack, defend, and spell actions
   - Health bars and battle effects
   - Score tracking across 3 rounds

5. **`results-bridge.html`** - Score display and countdown
   - Shows total combined score
   - Displays challenge completion status
   - 5-second countdown timer with progress bar
   - Automatically redirects to invitation

6. **`invitation.html`** - Birthday celebration page
   - Clean invitation card with video
   - Navigation buttons (Back to Sorting, Start Over)
   - Simplified layout without welcome section

## ✨ Features

- **Interactive Games**: Quiz and duel challenges to earn invitation
- **Sequential Game Flow**: Must complete both games to proceed
- **Score System**: Combined score must be >70 to earn invitation
- **Responsive Design**: Uses viewport units (vh/vw) with clamp() functions
- **Magical Animations**: Floating particles, battle effects, countdown timer
- **Interactive Elements**: House selection, quiz options, duel actions
- **Data Persistence**: User data and scores stored in localStorage
- **Navigation**: Smooth transitions between pages
- **Mobile-Friendly**: Fully responsive with touch-optimized interactions

## 🎮 Game Mechanics

### Quiz Game
- 5 Harry Potter trivia questions
- Multiple choice answers
- Immediate feedback with explanations
- Must get at least 3 correct to proceed

### Duel Game
- Battle against 3 random magical creatures
- Turn-based combat system
- Attack (15-25 damage), Defend (reduces incoming damage), Spell (20-35 damage)
- Health bars and visual effects
- Score based on defeated enemies' HP

### Scoring System
- Quiz Score: 100 points per correct answer
- Duel Score: Enemy's max HP added when defeated
- Total Score: Must exceed 70 points to earn invitation

## 🎨 Design

- **Color Scheme**: Black, white, and dark chocolate as requested
- **Theme**: Harry Potter Hogwarts School
- **Typography**: Cinzel (headings) and Cormorant Garamond (body text)
- **Effects**: Magical borders, sparkles, floating particles, battle animations
- **UI**: Engaging game interfaces with hover effects and transitions

## 🚀 Deployment

Perfect for GitHub Pages deployment:

1. Upload all files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Access at `https://yourusername.github.io/invitation-birthday`

## 📱 Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Responsive design works on all screen sizes (320px to 4K+)
- Video support for MP4 format
- Touch-friendly interactions for mobile devices

## 🧙‍♂️ Magic Features

- Sorting hat animation and house selection
- House-specific color themes and badges
- Magical sound effects and visual feedback
- Smooth page transitions and entrance animations
- Personalized user experience with name and house display
- Engaging game mechanics with score tracking
- Countdown timer with magical effects
- Battle arena with creature animations
