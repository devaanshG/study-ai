import { User, Lightbulb, GraduationCap, School } from "lucide-react";
import Button57 from "@/app/components/Button";
import Header from "@/app/components/Header";
import UserAvatar from "./components/UserAvatar";

export default function Home() {
  return (
    <>
      <Header>
        <UserAvatar />
      </Header>
      {/* Cover Section */}
      <main>
        <section
          id="cover"
          className="flex items-center justify-between text-center h-[100vh] px-10 bg-black text-white"
        >
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-5xl font-semibold mb-4">
              Transform your learning
            </h1>
            <p className="text-xl mb-8">Learn better with the power of AI</p>
            <Button57 text="Get Started" alternateText="Let's Go!" />
          </div>
        </section>

        {/* Additional Content */}
        <section className="py-16 px-10 text-white">
          <h2 className="text-3xl font-bold mb-10 text-center">Your Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-black">
            <div className="flex flex-col items-center p-6 bg-white">
              <Lightbulb size={40} className="mb-6" />
              <h3 className="text-xl font-semibold mb-1">Feedback</h3>
              <p>
                Get instant, accurate, and specific feedback on your work. It's
                like having a teacher 24/7.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white">
              <School size={40} className="mb-6" />
              <h3 className="text-xl font-semibold  mb-1">New Questions</h3>
              <p>
                Out of practice questions? No problem. We generate new questions
                for you, based on past papers.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white">
              <GraduationCap size={40} className="mb-6" />
              <h3 className="text-xl font-semibold mb-1">Track Progress</h3>
              <p>Stay motivated and organised by tracking your achievements.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-20 text-white">
        <p>&copy; 2024 StudyAI. All rights reserved.</p>
      </footer>
    </>
  );
}
