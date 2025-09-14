import Task from "@/components/Task";
import Header from "../../components/Header";
import Counter from "@/components/Counter";
import ToDo from "@/components/ToDo";
import FacebookCard from "@/components/FacebookCard";

export default function Practice() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Practice Components
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Master React by building real components. Each task builds on the
              previous one, helping you understand React patterns and best
              practices.
            </p>
          </div>

          {/* Task Cards */}
          <div className="space-y-8">
            <Task
              title="Task 1: Counter Component"
              description="Build a simple Counter component using React Hooks, and display it below."
              component={Counter}
            />
            <Task
              title="Task 2: Facebook Cards"
              description="Build the facebook Add a Friend card."
              component={FacebookCard}
            />
            <Task
              title="Task 3: To-Do List Component"
              description="Build a simple To-Do List where users can add and remove tasks."
              component={ToDo}
            />

            
          </div>
        </div>
      </div>
      <Header />
    </>
  );
}
