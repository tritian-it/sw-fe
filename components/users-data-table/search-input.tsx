import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchInputProps {
  searchQuery: string;
  onSearch: (searchTerm: string) => void;
}

export function SearchInput({ searchQuery, onSearch }: SearchInputProps) {
  const [localSearchQuery, setLocalSearchQuery] = useState<string>(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(localSearchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [localSearchQuery, onSearch]);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  return (
    <div className="relative max-w-sm">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search users..."
        value={localSearchQuery}
        onChange={(event) => setLocalSearchQuery(event.target.value)}
        className="pl-8 max-w-sm"
      />
    </div>
  );
}