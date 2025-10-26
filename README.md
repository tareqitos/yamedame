<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/tareqitos/yamedame/blob/main/public/logo/dark-mode-logo.png">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/tareqitos/yamedame/blob/main/public/logo/light-mode-logo.png">
    <img alt="Yamedame Logo" src="https://github.com/tareqitos/yamedame/blob/main/public/logo/light-mode-logo.png" width="500">
  </picture>
</p>


<p align="center">
  <strong>Don't give up! Don't stop learning Japanese!</strong>
</p>

<p align="center">
  A comprehensive, curated collection of Japanese learning resources for all proficiency levels.
</p>

<p align="center">
  <a href="https://yameda.me">🌐 Visit Website</a> •
  <a href="https://discord.gg/QW5QXf3YqX">💬 Join Discord</a> •
  <a href="https://ko-fi.com/H2H0QZVAZ">☕ Support</a>
</p>


---

## 📖 About the Project

**Yamedame** (やめだめ) is a free, open-source platform that aggregates hundreds of Japanese learning resources in one convenient place. The name comes from:

- **やめ** (yame) - from "yameru" (やめる), meaning "to stop" or "to quit"
- **だめ** (dame) - meaning "no good", "not allowed", or "don't"

Together, **やめだめ** means **"Don't stop!"** or **"Don't give up!"** - embodying the spirit of persistent language learning.

Originally created as a personal collection, Yamedame has grown into a comprehensive resource hub for students, teachers, self-learners, and anyone interested in Japanese language and culture.

## ✨ Features

### 🎯 Comprehensive Resource Categories

- **📚 Dictionaries** - Essential dictionaries and reference tools
- **📝 Vocabulary & Kanji** - Build your kanji and vocabulary knowledge
- **📖 Grammar** - Master Japanese grammar rules and patterns
- **📚 Reading** - Practice with texts, articles, and stories
- **💾 Media** - YouTube channels, podcasts, gaming content, and more
- **🎮 Games** - Learn through interactive gaming experiences
- **💻 Applications** - Software and tools to support your studies
- **🎌 Miscellaneous** - Additional helpful resources and community links

### 🌟 Key Highlights

- **Beginner Essentials** - Dedicated page for newcomers with curated starter resources
- **Smart Search** - Quickly find the resources you need
- **Random Discovery** - "Surprise me" button to discover new resources
- **Mobile Friendly** - Fully responsive design for learning on the go
- **Dark Mode** - Easy on the eyes during late-night study sessions
- **Regular Updates** - Monthly updates with new resources and improvements


## 🚀 Getting Started


#### Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MySQL/MariaDB
- **Icons:** Phosphor Icons
- **Deployment:** Vercel


#### Local Development


1. **Clone the repository**

```bash
git clone https://github.com/tareqitos/yamedame.git
cd yamedame
```

2. **Install dependencies**
   
```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.local.example .env.local
# Edit .env.local with your database credentials
```

4. **Initialize the database**

```bash
npm run setup-db
```

5. **Run the development server**

```bash
npm run dev
```

6. Open your browser
Navigate to http://localhost:3000

## Project Structure

```
yamedame/
├── app/              # Next.js app directory (pages, layouts)
├── components/       # React components
├── context/          # React context providers
├── lib/              # Database and utility functions
├── public/           # Static assets and data
├── scripts/          # Database initialization scripts
├── types/            # TypeScript type definitions
└── utils/            # Helper functions and constants
```

## Contributing
If you have any features you'd want to add, feel free to fork this repository and submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Happy learning! 🎌
