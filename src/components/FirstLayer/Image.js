import {
	interpolate,
	spring,
	useVideoConfig,
	useCurrentFrame,
	Img,
	AbsoluteFill,
	Sequence,
} from 'remotion';

import styled from 'styled-components';
import {MainTitle} from './MainTitle';
import Title from './Title';

import './imageRotate.css';

const Container = styled(AbsoluteFill)`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Left = styled.div`
	justify-content: center;
	align-items: center;
`;

const Right = styled.div`
	justify-content: end;
	align-items: end;
	padding-right: 0px;

	margin-left: 900px;
`;

const Spacer = styled.div`
	width: 0px;
`;

const Row = styled.div`
	flex-direction: row;
`;

const Image = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = spring({
		fps,
		frame,
		config: {
			mass: 10,
			damping: 200,
		},
	});

	const opacity = interpolate(progress, [0, 0.5], [500, 1], {
		extrapolateRight: 'clamp',
	});
	return (
		<Container>
			<Row>
				<Left>
					<Sequence from={5}>
						<MainTitle
							title1="MICHEAL"
							title2="JORDAN"
							titleColor="white"
							top={250}
							size="65px"
							fontWeight={700}
							marginLeft={400}
						/>
					</Sequence>
					<Sequence from={10}>
						<Title
							titleColor="white"
							titleText="Bachelor of Science"
							top={450}
							size="60px"
							fontWeight={0}
							marginLeft={350}
							time={3}
						/>
					</Sequence>
					<Sequence from={15}>
						<Title
							titleColor="white"
							titleText="Anujan Nesarajah"
							top={530}
							size="30px"
							fontWeight={0}
							marginLeft={450}
							time={5}
						/>
					</Sequence>
				</Left>
				<Spacer />
				<Right>
					<Img
						className="rotate"
						src="https://pbs.twimg.com/media/FSrWJNcXwAEpINW.jpg"
						style={{
							borderBottom: '50px solid white',
							borderTop: '15px solid white',
							borderLeft: '15px solid white',
							borderRight: '15px solid white',

							maxWidth: '800px',
							maxHeight: '700px',
							transform: `translateY(${opacity}px) `,
						}}
					/>
				</Right>
			</Row>
		</Container>
	);
};

export default Image;
