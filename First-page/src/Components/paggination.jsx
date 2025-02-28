import  { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";


const Pagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 10; // Items per page

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div className="p-4 w-full max-w-2xl mx-auto">
      
      <h2 className="text-lg font-semibold mb-4">Paginated Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-2">
        {data.map((item) => (
          <li key={item.id} className="border p-4 rounded-lg bg-gray-100">
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="font-medium">Page {page}</span>
        <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
      </div>
    </div>
  );
};

export default Pagination;
