# React Components Practice

A small React/Next.js playground for building and experimenting with reusable UI components.  
This project is meant to practice React patterns, props, state management, and composition by implementing self-contained components like counters, cards, and to-do lists.

---

## 🚀 Features

- **Task Wrapper** – A layout component (`Task`) that renders each practice exercise with a title, description, preview, and optional “View Component” link.  
- **Counter** – A simple stateful counter with increment, decrement, and reset buttons. Demonstrates `useState` and functional updates.  
- **FacebookCard** – A mock social media “Add Friend” card that accepts props (`name`, `title`, `profileImage`, `mutualFriendImage`, etc.). Demonstrates props, composition, and styling with Tailwind.  
- **To-Do List** – A simple list with add/remove functionality to practice list rendering and event handling.  
- **More Coming** - more tasks coming soon!!!

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)  
- [React](https://react.dev/)  
- [Tailwind CSS](https://tailwindcss.com/) for styling  

---

## 📂 Project Structure

```
app/
  page.js                # Main practice page
components/
  Counter.jsx            # Counter component
  FacebookCard.jsx       # Facebook-style card component
  Task.jsx               # Task wrapper component
  ToDo.jsx               # To-do list component
```

---

## 🔧 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/glennnoronha/react-components-practice.git
   cd react-components-practice
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the dev server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**  
   Visit [http://localhost:3000](http://localhost:3000)

---

## 💡 How It Works

Each component is wrapped in a `Task` that provides:
- Title & description for context  
- Component preview box  
- Optional link to a standalone demo page  

This makes it easy to practice React component design while keeping everything organized in one place.

---

## 📚 Lessons Learned

- Passing props to components for reusability  
- Using state with `useState` and functional updates  
- Composition with `children` instead of hard-coded component props  
- Consistent styling with Tailwind utilities  

---

## 📌 Roadmap

- [ ] Add form components (inputs, checkboxes, etc.)  
- [ ] Add a modal component  
- [ ] Add more social card variations  
- [ ] Add tests with Jest/React Testing Library  

---

## 🖼️ Screenshots

*Screenshots will be here in the future*

---

## 📜 License

MIT License
