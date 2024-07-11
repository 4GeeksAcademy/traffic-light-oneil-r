import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState('red');
	const [colors, setColors] = useState(['red', 'yellow', 'green']);
  
	const handleColorClick = (selectedColor) => {
	  setColor(selectedColor);
	};
  
	const cycleColors = () => {
	  const currentIndex = colors.indexOf(color);
	  const nextIndex = (currentIndex + 1) % colors.length;
	  setColor(colors[nextIndex]);
	};
  
	const addPurpleColor = () => {
	  if (!colors.includes('purple')) {
		setColors([...colors, 'purple']);
	  }
	};
  
	return (
	  <div className="home-container">
		<div className="traffic-light-container">
		  <div className="traffic-light">
			{colors.map((col) => (
			  <div
				key={col}
				className={`light ${col} ${color === col ? 'glow' : ''}`}
				onClick={() => handleColorClick(col)}
			  ></div>
			))}
		  </div>
		  <button className="cycle-button" onClick={cycleColors}>
			Cycle Colors
		  </button>
		  <button className="add-purple-button" onClick={addPurpleColor}>
			Add Purple
		  </button>
		</div>
	  </div>
	);
  };

export default Home;
