export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Main Hello World Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Hello World
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl text-gray-700 font-medium">
            Welcome to your Next.js application
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            This is a simple Hello World page built with Next.js 15, TypeScript, and Tailwind CSS. 
            Ready to start building something amazing!
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 pt-8">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-150"></div>
        </div>

        {/* Footer */}
        <div className="pt-12 text-sm text-gray-500">
          <p>Built with ❤️ using modern web technologies</p>
        </div>
      </div>
    </div>
  );
}