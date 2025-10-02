import { useState, useEffect, useRef } from 'react';
import MobileSearchUI from './MobileSearchUI';

function MobileSearch({ isOpen, onClose, value, onChange }) {
  const [recentSearches, setRecentSearches] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentTaskSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearch = (searchValue) => {
    onChange(searchValue);
    
    // Save to recent searches if not empty
    if (searchValue.trim()) {
      const updated = [searchValue, ...recentSearches.filter(s => s !== searchValue)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('recentTaskSearches', JSON.stringify(updated));
    }
  };

  const handleRecentSearchClick = (searchTerm) => {
    onChange(searchTerm);
    onClose();
  };

  const handleClearRecent = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentTaskSearches');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      handleSearch(value);
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <MobileSearchUI
      value={value}
      recentSearches={recentSearches}
      suggestions={suggestions}
      inputRef={inputRef}
      onChange={onChange}
      onSearch={handleSearch}
      onRecentSearchClick={handleRecentSearchClick}
      onClearRecent={handleClearRecent}
      onKeyDown={handleKeyDown}
      onClose={onClose}
    />
  );
}

export default MobileSearch;