# AI Brand Intelligence Engine
AI Brand Intelligence Engine transforms ideas into launch-ready brands using AI Strategist + Skeptic workflows. It develops positioning, naming, messaging, and visuals, then monitors brand consistency and drift as the brand evolves over time online.


## What it does

The system takes a structured approach to branding:

**Discover → Position → Shape → Visualize → Challenge → Launch → Monitor**

### Strategist + Skeptic

* **Strategist** — develops positioning, naming, messaging, personality, and visual direction.
* **Skeptic** — challenges clichés, weak differentiation, contradictions, and generic AI output.

The Strategist then revises the work based on the critique.

### Brand DNA

Brand decisions are connected into one system:

```text
Audience → Problem → Positioning → Differentiator
→ Personality → Name → Tagline → Voice → Visuals
```

Changes to important decisions can propagate to affected downstream brand elements.

### Market Awareness

When research is available, the system can analyze existing brands for positioning, naming, messaging, and visual overlap while clearly separating verified information from AI assumptions and recommendations.

### Brand Consistency

Once a brand is locked, the **Consistency Guardian** evaluates future content such as social posts, ads, landing pages, and campaigns against the established brand system.

The **Brand Drift Detector** identifies consistency patterns across multiple submissions over time.

---

## Key Features

* AI Strategist + Skeptic workflow
* Brand discovery & positioning
* Naming & messaging
* Brand DNA Graph
* Change propagation
* Market research
* Visual brand direction
* Brand consistency checking
* Brand drift detection
* Provenance & confidence tracking

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* Zustand
* TanStack Query
* React Flow

### Backend

* Python
* FastAPI
* Pydantic
* SQLAlchemy
* REST APIs
* WebSockets / Server-Sent Events

### AI & Intelligence

* LLM-powered Strategist, Skeptic, Consistency Guardian & Drift Detector
* LangGraph for workflow orchestration
* Structured AI outputs
* Embeddings and semantic search
* RAG for brand and market intelligence
* AI-assisted visual and content analysis

### Data & Storage

* PostgreSQL
* pgvector
* Redis
* S3-compatible object storage

### Research & Market Intelligence

* Web search APIs
* Playwright
* Web scraping and document extraction
* Competitor analysis
* Source provenance and confidence tracking

### Visual Intelligence

* AI image generation
* Vision models
* Image embeddings
* OCR
* Visual brand analysis

### Evaluation & Monitoring

* AI output evaluation
* Brand consistency scoring
* Brand drift detection
* Prompt and version tracking
* Application monitoring

### Infrastructure

* Docker
* Background workers
* GitHub Actions / CI/CD
* Netlify / Vercel
* Cloud-hosted backend
* Managed PostgreSQL, Redis and object storage

### AI-Assisted Development

AI assistance was used throughout the development process for code exploration, implementation support, debugging, documentation, and iterative refinement. 


## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

The production build is generated in:

```text
dist/
```

## Deployment

The project is deployed using **Netlify**.

The Vite production build can be deployed by uploading the `dist/` folder to Netlify or by connecting the GitHub repository to Netlify for automatic deployments.

---
Public URL : https://poetic-profiterole-30332a.netlify.app/
## Core Idea

> **Don't just generate a brand. Understand it, challenge it, connect it, launch it, and keep it consistent.**
