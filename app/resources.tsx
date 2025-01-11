import Link from 'next/link';

export const metadata = {
  title: 'Resources | Being a Woman of Faith',
  description: 'Explore our collection of resources to support your journey in faith.',
};

export default function Resources() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-green-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Resources</h1>
        <p className="text-xl mb-12 text-center">Explore our collection of resources to support your journey in faith.</p>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Bible Study Guides</h2>
            <p className="mb-4">Deepen your understanding of Scripture with our comprehensive study guides.</p>
            <a href="#" className="text-blue-600 hover:underline">Explore guides →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Prayer Journal Templates</h2>
            <p className="mb-4">Download printable templates to enrich your prayer life and spiritual reflection.</p>
            <a href="#" className="text-blue-600 hover:underline">Get templates →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Devotional Podcasts</h2>
            <p className="mb-4">Listen to inspiring devotionals to start your day with God's word.</p>
            <a href="#" className="text-blue-600 hover:underline">Listen now →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Faith-Based Book Recommendations</h2>
            <p className="mb-4">Discover books that will encourage and challenge your walk with Christ.</p>
            <a href="#" className="text-blue-600 hover:underline">View booklist →</a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/index.html" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
