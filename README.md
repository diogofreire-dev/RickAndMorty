# Rick and Morty Explorer

A hybrid mobile application built with **Ionic + Vue 3** that consumes the [Rick and Morty API](https://rickandmortyapi.com/) to display characters and episodes from the popular TV series.

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe JavaScript
- **Ionic 8** - Cross-platform UI framework for hybrid mobile apps
- **Capacitor 8** - Native runtime for building mobile applications
- **Vite** - Fast build tool and development server

## Features

### Characters Page
- Browse all characters from the Rick & Morty universe
- Real-time search filtering by character name
- Detailed character modal with status, species, gender, and origin
- Color-coded status badges (Alive/Dead/Unknown)
- Pull-to-refresh functionality
- Toast notifications for loading feedback

### Episodes Page
- Browse all episodes organized by season
- **IonSegment** filter for quick season navigation (All, S01-S05)
- Episode code badges and air dates
- Smooth scrolling list

### Additional Features
- Side menu navigation
- Responsive design (mobile and desktop)
- Custom green theme matching the show's aesthetic

## Project Structure

```
src/
├── App.vue                 # Root component with side menu
├── main.ts                 # Application entry point
├── router/
│   └── index.ts            # Vue Router configuration
├── services/
│   └── RickAndMortyService.ts  # API service layer
├── views/
│   ├── TabsPage.vue        # Tab navigation container
│   ├── Tab1Page.vue        # Home page
│   ├── Tab2Page.vue        # Characters page
│   ├── Tab3Page.vue        # Episodes page
│   └── Tab4Page.vue        # About page
├── components/
│   └── ExploreContainer.vue
├── assets/
│   └── img/                # Images and logos
└── theme/
    └── variables.css       # Ionic theme customization
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/rick-and-morty-explorer.git

# Navigate to project directory
cd rick-and-morty-explorer

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8100`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test:unit` | Run unit tests (Vitest) |
| `npm run test:e2e` | Run E2E tests (Cypress) |
| `npm run lint` | Run ESLint |

## API Reference

This project uses the free [Rick and Morty API](https://rickandmortyapi.com/):

- `GET /character` - Fetch all characters
- `GET /episode?page={page}` - Fetch episodes with pagination

## Screenshots

| Home | Characters | Episodes |
|------|------------|----------|
| Welcome screen | Character list with search | Season filter |

## Author

**Diogo Freire**
Informatics Management
2025/2026

## License

This project is for educational purposes.

---

*Built with Ionic + Vue.js*
