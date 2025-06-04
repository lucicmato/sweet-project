import Image from 'next/image';

interface AnchorsProps {
  upperSectionId: string;
  lowerSectionId: string;
}

const Anchors = ({ upperSectionId, lowerSectionId }: AnchorsProps) => {
  return (
    <div className="anchors">
      <div className="contanchors">
        <a href={`#${upperSectionId}`}>
          <Image className="anchortop" alt="" src="/img/anchors/toptestimonials.png" />
        </a>
        <a href={`#${lowerSectionId}`}>
          <Image className="anchorbottom" alt="" src="/img/anchors/bottomtestimonials.png" />
        </a>
      </div>
    </div>
  );
};

export default Anchors;
