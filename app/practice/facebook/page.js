import Task from "@/components/Task";
import Header from "../../../components/Header";
import Counter from "@/components/FacebookCard";
import FacebookCard from "@/components/FacebookCard";

export default function FacebookCardComponent() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Facebook Card</h1>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700/50">
              <FacebookCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
