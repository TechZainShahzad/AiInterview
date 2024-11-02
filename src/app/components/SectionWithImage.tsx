import Image from 'next/image';
import Button from './Button';

interface SectionWithImageProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageLeft?: boolean;
  onButtonClick: () => void; // Add this prop for the button click handler
}

const SectionWithImage: React.FC<SectionWithImageProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageLeft = false,
  onButtonClick, // Destructure it here
}) => {
  return (
    <section className={`flex flex-col lg:flex-row items-center justify-between py-16 ${imageLeft ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`flex-1 ${imageLeft ? 'lg:ml-8' : 'lg:mr-8'}`}> {/* Adds gap */}
        <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-foreground/70 text-base mb-6">{description}</p>
        <Button label={buttonText} onClick={onButtonClick} /> {/* Button triggers onButtonClick */}
      </div>
      <div className="flex-1">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default SectionWithImage;
