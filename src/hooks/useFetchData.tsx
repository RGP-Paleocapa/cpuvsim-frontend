import { FooterItem } from '@/types/footerTypes';
import { useState, useEffect } from 'react';

type GridDataItem = {
  colorKey: string;
  texts: string[];
  description: string;
};

interface SimpleArray {
  params: string[][];
};

interface PageData {
  gridData?: GridDataItem[];
  references?: FooterItem[];
  [key: string]: FooterItem[] | GridDataItem[] | string[][] | SimpleArray | undefined;
}

const useFetchData = (url: string) => {
  const [data, setData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) { 
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json() as PageData;
        setData(jsonData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
