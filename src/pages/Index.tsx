
import { QuizContainer } from "@/components/Quiz/QuizContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Marketing Strategy Quiz
          </h1>
          <p className="text-xl text-gray-600">
            Discover your perfect marketing strategy in just 3 minutes
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
