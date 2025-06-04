interface AnchorsProps {
  upperSectionId: string;
  lowerSectionId: string;
}

const Anchors = ({ upperSectionId, lowerSectionId }: AnchorsProps) => {
  return (
    <div className="anchors">
      <div className="contanchors">
        <a href={`#${upperSectionId}`}>
          <img className="anchortop" alt="" src="/img/anchors/toptestimonials.png" />
        </a>
        <a href={`#${lowerSectionId}`}>
          <img className="anchorbottom" alt="" src="/img/anchors/bottomtestimonials.png" />
        </a>
      </div>
    </div>
  );
};

export default Anchors;
