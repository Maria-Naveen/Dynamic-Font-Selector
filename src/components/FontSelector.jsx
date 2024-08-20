const FontSelector = ({ size, setSize }) => {
  const handleSlide = (e) => {
    setSize(e.target.value);
    console.log(size);
  };
  return (
    <div>
      <input
        type="range"
        min="0"
        value={size}
        onChange={handleSlide}
        max="100"
      />
    </div>
  );
};

export default FontSelector;
