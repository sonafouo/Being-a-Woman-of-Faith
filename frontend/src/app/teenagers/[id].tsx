import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const TeenagerPage = () => {
  const params = useParams();
  const id = params.id;
  const [teenager, setTeenager] = useState(null);

  useEffect(() => {
    const fetchTeenager = async () => {
      try {
        const res = await fetch(`/api/teenagers/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setTeenager(data);
      } catch (error) {
        console.error('Error fetching teenager:', error);
      }
    };

    if (id) {
      fetchTeenager();
    }
  }, [id]);

  if (!teenager) {
    return <div>Loading...</div>;
  }

  return (
    <div className="teenager-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      <h1>{teenager.name}</h1>
      <img src={teenager.image} alt={teenager.name} />
      <p>{teenager.bio}</p>
      </motion.div>
    </div>
  );
};

export default TeenagerPage;
