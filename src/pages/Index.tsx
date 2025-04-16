
import { QuizContainer } from "@/components/Quiz/QuizContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 font-playfair">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60"
              alt="Travel Quiz Header"
              className="w-full h-80 object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Travel Style Quiz
          </h1>
          <p className="text-xl text-gray-600">
            Discover your perfect travel style in just 3 minutes
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <QuizContainer />
        </div>
      </div>
    </div>
  );
};

export default Index;
