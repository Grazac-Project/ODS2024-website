"use client"


import LoadingSpinner from "@/components/loader";
import React, { useEffect, useState } from 'react';

const GalleryPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p>Error getting gallery images</p>
      ) : (
        <>
          {/* Your gallery component goes here */}
          <p> error </p>
        </>
      )}
    </div>
  );
};

export default GalleryPage;
