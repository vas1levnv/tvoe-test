import React from "react";
import style from "./CustomButton.module.scss"

interface Props {
	children?: React.ReactNode;
	background?: string;
	onClick?: () => void;
	filter?: string;
}

const CustomButton: React.FC<Props> = ({children, background, filter, onClick}) => {
	return (
		<button onClick={onClick}
				style={{background: background, backdropFilter: filter}}
				className={style.button}
		>
			{children}
		</button>
	);
};

export default CustomButton;