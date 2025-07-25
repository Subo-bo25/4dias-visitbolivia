'use client';

import { useState } from 'react';

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://backend-visitbolivia-k0o6.onrender.com'
  : 'http://localhost:8000';

export default function TestPage() {
  const [results, setResults] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const testEndpoint = async (endpoint: string, name: string) => {
    try {
      console.log(`Testing ${name}: ${endpoint}`);
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(10000),
        cache: 'no-store'
      });

      const data = await response.json();
      
      return {
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
        data: data,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      };
    }
  };

  const runTests = async () => {
    setLoading(true);
    setResults({});

    const tests = [
      { name: 'Health Check', endpoint: `${API_BASE_URL}/health` },
      { name: 'Detailed Health Check', endpoint: `${API_BASE_URL}/health/detailed` },
      { name: 'Reviews API', endpoint: `${API_BASE_URL}/api/reviews/4days` },
      { name: 'Images API', endpoint: `${API_BASE_URL}/api/images/4days` },
      { name: 'Itinerary API (ES)', endpoint: `${API_BASE_URL}/api/itinerary/4days?lang=es` },
      { name: 'Itinerary API (EN)', endpoint: `${API_BASE_URL}/api/itinerary/4days?lang=en` },
      { name: 'Packages API', endpoint: `${API_BASE_URL}/api/packages` }
    ];

    const testResults: any = {};

    for (const test of tests) {
      console.log(`Running test: ${test.name}`);
      testResults[test.name] = await testEndpoint(test.endpoint, test.name);
      setResults({ ...testResults });
      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">API Test Page</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">API Base URL</h2>
            <span className="text-sm text-gray-600">Environment: {process.env.NODE_ENV || 'development'}</span>
          </div>
          <p className="text-gray-700 font-mono bg-gray-100 p-3 rounded">
            {API_BASE_URL}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <button
            onClick={runTests}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            {loading ? 'Running Tests...' : 'Run API Tests'}
          </button>
        </div>

        {Object.keys(results).length > 0 && (
          <div className="space-y-4">
            {Object.entries(results).map(([testName, result]: [string, any]) => (
              <div key={testName} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{testName}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.success 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {result.success ? 'SUCCESS' : 'FAILED'}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Status:</span>
                    <span className="font-mono text-sm">
                      {result.status || 'N/A'} {result.statusText || ''}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Timestamp:</span>
                    <span className="font-mono text-sm">{result.timestamp}</span>
                  </div>
                  
                  {result.error && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-600">Error:</span>
                      <pre className="bg-red-50 border border-red-200 rounded p-3 mt-1 text-sm text-red-800 overflow-x-auto">
                        {result.error}
                      </pre>
                    </div>
                  )}
                  
                  {result.data && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-600">Response Data:</span>
                      <pre className="bg-gray-50 border border-gray-200 rounded p-3 mt-1 text-sm text-gray-800 overflow-x-auto max-h-64 overflow-y-auto">
                        {JSON.stringify(result.data, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 