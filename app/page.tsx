'use client'

import { useState, useCallback, useEffect } from "react";
import { SortingState } from "@tanstack/react-table";
import { UsersDataTable } from "@/components/users-data-table/data-table";
import { User } from "@/interfaces/user";

export default function Home() {
  const [data, setData] = useState<User[]>([]);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 7, // not 10 for demo purposes
  });

  // Function to fetch data from backend
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Build query parameters
      const params = new URLSearchParams();
      
      // Pagination
      params.append('page', String(pagination.pageIndex + 1));
      params.append('limit', String(pagination.pageSize));
      
      // Sorting
      if (sorting.length > 0) {
        params.append('sortBy', sorting[0].id);
        params.append('sortOrder', sorting[0].desc ? 'desc' : 'asc');
      }
      
      // General search query
      if (searchQuery) {
        params.append('search', searchQuery);
      }
      
      // Fetch data
      const response = await fetch(`http://localhost:3000/users?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const result = await response.json();
      
      setData(result.items || []);
      setTotalRows(result.meta.totalItems || result.items.length);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      setData([]);
      setTotalRows(0);
    } finally {
      setLoading(false);
    }
  }, [pagination, sorting, searchQuery]);

  // Fetch data when dependencies change
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm !== searchQuery) {
      setSearchQuery(searchTerm);
      setPagination({
        pageIndex: 0,
        pageSize: pagination.pageSize,
      });
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-2/3">
        <UsersDataTable 
          data={data}
          totalRows={totalRows}
          loading={loading}
          error={error}
          searchQuery={searchQuery}
          sorting={sorting}
          pagination={pagination}
          onSearch={handleSearch}
          onSortingChange={setSorting}
          onPaginationChange={setPagination}
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Spinwise demo FE
      </footer>
    </div>
  );
}