import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface TeenagerCardProps {
  id: string;
  title: string;
  imageUrl: string;
}

const TeenagerCard: React.FC<TeenagerCardProps> = ({
  id,
  title,
  imageUrl,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/teenagers/${id}`);
  };

  return (
    <div onClick={handleClick}>
      <Image src={imageUrl} alt={title} width={200} height={200} />
      <h2>{title}</h2>
    </div>
  );
};

export default TeenagerCard;
