
import { QuizContainer } from "@/components/Quiz/QuizContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 font-playfair">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src="/lovable-uploads/b6a20972-a5b2-44bf-ab20-9734ef0b86a3.png"
              alt="Travel Quiz Desert Landscape"
              className="w-full h-80 object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Where you should travel based on your personality type
          </h1>
          <p className="text-xl text-gray-600">
            The world is wide and the days are limited. That leaves only one question: where should you go next? 

This quiz will tell you where to go based on personality!
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
